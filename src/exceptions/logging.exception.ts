import { HttpException } from "@nestjs/common";

export class LoggingException extends HttpException {
  public metadata: object = {};

  constructor(message: string | object, status: number, metadata?: object) {
    let errorType;

    switch (status) {
      case 400:
        errorType = "Bad Request";
        break;
      case 404:
        errorType = "Not Found";
        break;
      case 403:
        errorType = "Forbidden";
        break;
      case 401:
        errorType = "Unauthorized";
        break;
      case 408:
        errorType = "Request Timeout";
        break;
      case 504:
        errorType = "Gateway Timeout";
        break;
      case 502:
        errorType = "Bad Gateway";
        break;
      default:
        errorType = "Internal Server Error";
    }

    super(
      {
        message: message,
        statusCode: status,
        error: errorType,
      },
      status
    );
    if (metadata) {
      this.metadata = metadata;
    }
  }
}
