import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { Logger } from "../logger";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const errorId = uuid();

    let logMetadata = {
      path: request.url,
      stack: exception.stack,
      statusCode: status,
      errorId: errorId,
    };

    if (exception["metadata"]) {
      logMetadata = {
        ...logMetadata,
        ...exception["metadata"],
      };
    }

    this.logger.error(exception.message, logMetadata);

    response.status(status).json({
      message: exception.message,
      errorId: errorId,
      statusCode: status,
    });
  }
}
