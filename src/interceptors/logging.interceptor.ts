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
        const { label, omitFields, requestBodyOutFields, requestHeadersOutFields, requestParamsOutFields, requestQueryOutFields, responseBodyOutFields } = this.reflector.get<AuditLogMetadata>('auditLog', context.getHandler()) ?? {};

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
                tap((response) => this.logger.auditLog({
                    eventContext,
                    eventName,
                    eventOutcome: "Success",
                    eventSource,
                    userId,
                    moreInfo: this.filterMoreInfo(req, response, responseBodyOutFields, requestBodyOutFields, requestParamsOutFields, requestQueryOutFields, requestHeadersOutFields, omitFields),
                })
                ), catchError((error: any) => {
                    if (error instanceof EaseyException) {
                        const status = error.getStatus();
                        const response: any = error.getResponse();
                        const message = response.message || 'Something went wrong';
                        const eventOutcome = response.error(status);
                        const metadata = error.metadata || {}

                        this.logger.auditLog({
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

                        this.logger.auditLog({
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

    // Generalized function to get values from dynamic JSON structure
    getValuesFromData(keyPath: string, data: unknown) {
        let result = [];
        let keys = keyPath.split('.');

        // Helper function to traverse the object recursively
        function traverse(currentObj, keyPathParts) {
            // Base case: if there are no more parts to the keyPath, we're at the target level
            if (keyPathParts.length === 0) {
                if (currentObj !== undefined) {
                    // Push the value of the current object to the result
                    result.push(currentObj);
                }
            } else {
                // Get the next key in the path
                let nextKey = keyPathParts.shift();

                // If the current object is an array, we need to process each item in the array
                if (Array.isArray(currentObj)) {
                    currentObj.forEach(item => {
                        if (item && item[nextKey] !== undefined) {
                            traverse(item[nextKey], [...keyPathParts]);
                        }
                    });
                } else if (currentObj && currentObj[nextKey] !== undefined) {
                    // If it's an object and the key exists, go deeper
                    traverse(currentObj[nextKey], keyPathParts);
                }
            }
        }

        // Start the recursive traversal with the provided data and key path
        traverse(data, keys);

        return result;
    }

    filterMoreInfo(request: any, response: unknown, responseBodyOutFields: AuditLogMetadata['responseBodyOutFields'], requestBodyOutFields: AuditLogMetadata['requestBodyOutFields'], requestParamsOutFields: AuditLogMetadata['requestParamsOutFields'], requestQueryOutFields: AuditLogMetadata['requestQueryOutFields'], requestHeadersOutFields: AuditLogMetadata['requestHeadersOutFields'], omitFields: AuditLogMetadata['omitFields']) {

        const requestParams = request.params;
        const requestBody = request.body;
        const requestQuery = request.query;
        const requestHeaders = request.headers;

        const getFieldValues = (
            fields: string[] | '*' | 'all' = [],
            data: unknown,
        ) => {
            if (data && fields && Object.getPrototypeOf(data) === Object.prototype) {
                if (fields === '*' || fields === 'all') {
                    return data as Record<string, unknown>;
                }

                const dotIncludeList = fields.filter(field => field.includes('.'));
                const obj = {}
                for (let i = 0; i < dotIncludeList.length; i++) {
                    const result = this.getValuesFromData(dotIncludeList[i], data)
                    obj[dotIncludeList[i]] = result;
                }

                return Object.keys(data).reduce((acc, key) => {
                    if (fields.includes(key)) {
                        acc[key] = data[key];
                    }

                    if (Object.keys(obj).length > 0) {
                        acc = { ...acc, ...obj }
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
            ...getFieldValues(responseBodyOutFields, response),
            ...getFieldValues(requestHeadersOutFields, requestHeaders)
        }).reduce((acc, [key, value]) => {
            if (!omitFields?.includes(key)) {
                acc[key] = value;
            }
            return acc;
        }, {});
    }
}
