import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Logger } from '../logger';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { methodNameToEventName } from '../constants';
import { EaseyException } from '../exceptions';
import { AuditLogMetadata } from '../interfaces';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(
        private readonly logger: Logger,
        private readonly reflector: Reflector,
    ) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const { label, omitFields, requestBodyOutFields, requestParamsOutFields, requestQueryOutFields, responseBodyOutFields } = this.reflector.get<AuditLogMetadata>('auditLog', context.getHandler()) ?? {};

        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();
        const methodName = context.getHandler().name;
        const eventContext = context.getClass().name;
        const eventName = label || methodNameToEventName[methodName] || methodName;
        const userId = req.user?.userId || req.body?.userId;
        const forwardedForHeader = req.headers["x-forwarded-for"];
        let eventSource = req.ip;

        if (forwardedForHeader !== null && forwardedForHeader !== undefined) {
            eventSource = forwardedForHeader.split(",")[0];
        }

        return next
            .handle()
            .pipe(
                tap((response) => this.logger.info({
                    eventContext,
                    eventName,
                    eventOutcome: "Success",
                    eventSource,
                    userId,
                    moreInfo: this.filterMoreInfo(req, response, responseBodyOutFields, requestBodyOutFields, requestParamsOutFields, requestQueryOutFields, omitFields),
                })
                ), catchError((error: any) => {
                    if (error instanceof EaseyException) {
                        const status = error.getStatus();
                        const response: any = error.getResponse();
                        const message = response.message || 'Something went wrong';
                        const eventOutcome = response.error(status);
                        const metadata = error.metadata || {}

                        this.logger.info({
                            eventContext,
                            eventName,
                            eventOutcome,
                            eventSource,
                            userId,
                            moreInfo: { message, statusCode: status, metadata }
                        });

                        return throwError(() => new HttpException({
                            statusCode: status,
                            message,
                        }, status));
                    }
                    else {
                        const status = error.status || 500;
                        const message = error.message || 'Internal Server Error';

                        this.logger.info({
                            eventContext,
                            eventName,
                            eventOutcome: "Internal Server Error",
                            eventSource,
                            userId,
                            moreInfo: { message, statusCode: status }
                        });

                        // For other errors, log and return a generic error response
                        return throwError(() => new HttpException({ statusCode: status, message, }, status));
                    }
                }),
            );
    }

    filterMoreInfo(request: any, response: unknown, responseBodyOutFields: AuditLogMetadata['responseBodyOutFields'], requestBodyOutFields: AuditLogMetadata['requestBodyOutFields'], requestParamsOutFields: AuditLogMetadata['requestParamsOutFields'], requestQueryOutFields: AuditLogMetadata['requestQueryOutFields'], omitFields: AuditLogMetadata['omitFields']) {

        const requestParams = request.params;
        const requestBody = request.body;
        const requestQuery = request.query;

        const getFieldValues = (
            fields: string[] | '*' | 'all' = [],
            data: unknown,
        ) => {
            if (data && fields && Object.getPrototypeOf(data) === Object.prototype) {
                if (fields === '*' || fields === 'all') {
                    return data as Record<string, unknown>;
                }
                return Object.keys(data).reduce((acc, key) => {
                    if (fields.includes(key)) {
                        acc[key] = data[key];
                    }
                    return acc;
                }, {});
            }
            return {};
        };

        return Object.entries({
            ...getFieldValues(requestParamsOutFields, requestParams),
            ...getFieldValues(requestBodyOutFields, requestBody),
            ...getFieldValues(requestQueryOutFields, requestQuery),
            ...getFieldValues(responseBodyOutFields, response)
        }).reduce((acc, [key, value]) => {
            if (!omitFields?.includes(key)) {
                acc[key] = value;
            }
            return acc;
        }, {});
    }
}
