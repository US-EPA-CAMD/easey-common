import { HttpException } from "@nestjs/common";

export class LoggingException extends HttpException {
  public metadata: object = {};

  constructor(message: string | object, status: number, metadata?: object) {
    super(
      {
        message: message,
        status: status,
      },
      status
    );
    if (metadata) {
      this.metadata = metadata;
    }
  }
}
