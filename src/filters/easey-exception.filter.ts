import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { Logger } from "../logger";

@Catch()
export class EaseyExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception["message"]
      ? exception["message"]
      : "Internal Server Error";

    const stack = exception["stack"]
      ? exception["stack"]
      : "No stack information available";

    const errorId = uuid();

    let logMetadata = {
      path: request.url,
      stack: stack,
      statusCode: httpStatus,
      errorId: errorId,
    };

    if (exception["metadata"]) {
      logMetadata = {
        ...logMetadata,
        ...exception["metadata"],
      };
    }

    this.logger.error(message, stack, request.url, logMetadata);

    response.status(httpStatus).json({
      message: message,
      errorId: errorId,
      statusCode: httpStatus,
    });
  }
}
