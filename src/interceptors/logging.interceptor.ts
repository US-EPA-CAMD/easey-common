import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Logger } from '../logger';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { methodNameToEventName } from '../constants';
import { EaseyException } from '../exceptions';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(
        private readonly logger: Logger,
        private readonly reflector: Reflector,
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        const description = this.reflector.get<string>('description', context.getHandler());
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();
        const methodName = context.getHandler().name;
        const eventContext = context.getClass().name;
        const eventName = description || methodNameToEventName[methodName] || methodName;
        const eventSource = req.ip;
        const userId = req.user?.userId || req.body?.userId;

        return next
            .handle()
            .pipe(
                tap((response) => this.logger.info({
                    eventContext,
                    eventName,
                    eventOutcome: "Success",
                    eventSource,
                    userId,
                    moreInfo: response
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
}
