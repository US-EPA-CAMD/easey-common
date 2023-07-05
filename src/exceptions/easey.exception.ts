import { HttpException } from "@nestjs/common";

//Takes an error message string or error object, and status code, with optional metadata useful for filtering
export class EaseyException extends HttpException {
  public metadata: object = {};

  constructor(error: Error | string, status, metadata?: object) {
    super(
      {
        message: typeof error === 'string' ? error : error.message,
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

    if (typeof error !== 'string') {
      this.stack = error.stack; //Override the stack to show the underlying error stack only
    }

    if (metadata) {
      this.metadata = metadata;
    }
  }
}
