import { HttpException } from "@nestjs/common";

//Takes an error message string, and status code, with optional metadata useful for filtering
export class LoggingException extends HttpException {
  public metadata: object = {};

  constructor(message: string, status: number, metadata?: object) {
    super(
      {
        message,
        statusCode: status,
        error: (status: number) => {
          switch (status) {
            case 400:
              return "Bad Request";
            case 404:
              return "Not Found";
            case 403:
              return "Forbidden";
            case 401:
              return "Unauthorized";
            case 408:
              return "Request Timeout";
            case 504:
              return "Gateway Timeout";
            case 502:
              return "Bad Gateway";
            default:
              return "Internal Server Error";
          }
        },
      },
      status
    );

    if (metadata) {
      this.metadata = metadata;
    }
  }
}
