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
        const { bodyOutFields, infields, label, outFields, paramsOutFields, queryOutFields, requestInFields } = this.reflector.get<AuditLogMetadata>('auditLog', context.getHandler()) ?? {};

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
                    moreInfo: { ...this.filterRequestParams(req, bodyOutFields, paramsOutFields, queryOutFields, requestInFields) as Object, ...this.filterResponse(response, outFields, infields) as Object },
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
                        this.logger.info({
                            eventContext,
                            eventName,
                            eventOutcome: "Internal Server Error",
                            eventSource,
                            userId,
                            moreInfo: { message: error.message }
                        });

                        // For other errors, log and return a generic error response
                        return throwError(() => new HttpException('Internal Server Error', 500));
                    }
                }),
            );
    }

    filterResponse(response: unknown, outFields: AuditLogMetadata['outFields'], infields: AuditLogMetadata['infields']) {
        let resp = response;

        if (!outFields || !response || Object.getPrototypeOf(response) !== Object.prototype || infields === '*' || infields === 'all') {
            return {};
        }

        if (infields && infields.length) {
            for (let i = 0; i < infields.length; i++) {
                delete resp[infields[i]];
            }
        }

        if (outFields === true || outFields === '*' || outFields === 'all') {
            return resp;
        }

        return Object.keys(resp).reduce((acc, key) => {
            if (outFields.includes(key)) {
                acc[key] = resp[key];
            }
            return acc;
        }, {});
    }

    filterRequestParams(request: any, bodyOutFields: AuditLogMetadata['bodyOutFields'], paramsOutFields: AuditLogMetadata['paramsOutFields'], queryOutFields: AuditLogMetadata['queryOutFields'], requestInFields: AuditLogMetadata['requestInFields']) {
        if (!paramsOutFields && !bodyOutFields && !queryOutFields) {
            return {};
        }

        const requestParams = request.params;
        const requestBody = request.body;
        const requestQuery = request.query;
        let result = {};

        if (paramsOutFields === '*' || paramsOutFields === 'all') {
            result = { ...requestParams }
        }

        if (bodyOutFields === '*' || bodyOutFields === 'all') {
            result = { ...result, ...requestBody }
        }

        if (queryOutFields === '*' || queryOutFields === 'all') {
            result = { ...result, ...requestQuery }
        }

        if (paramsOutFields !== '*' && paramsOutFields !== 'all' && paramsOutFields.length && Object.getPrototypeOf(requestParams) === Object.prototype) {
            const data = Object.keys(requestParams).reduce((acc, key) => {
                if (paramsOutFields.includes(key)) {
                    acc[key] = requestParams[key];
                }
                return acc;
            }, {});
            result = { ...result, ...data }
        }

        if (bodyOutFields !== '*' && bodyOutFields !== 'all' && bodyOutFields.length && Object.getPrototypeOf(requestBody) === Object.prototype) {
            const data = Object.keys(requestBody).reduce((acc, key) => {
                if (bodyOutFields.includes(key)) {
                    acc[key] = requestBody[key];
                }
                return acc;
            }, {});
            result = { ...result, ...data }
        }

        if (queryOutFields !== '*' && queryOutFields !== 'all' && queryOutFields.length && Object.getPrototypeOf(requestQuery) === Object.prototype) {
            const data = Object.keys(requestQuery).reduce((acc, key) => {
                if (queryOutFields.includes(key)) {
                    acc[key] = requestQuery[key];
                }
                return acc;
            }, {});
            result = { ...result, ...data }
        }
        if (requestInFields && requestInFields.length) {
            for (let i = 0; i < requestInFields.length; i++) {
                delete result[requestInFields[i]]
            }
        }

        return result;
    }
}
