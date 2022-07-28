import { HttpException } from "@nestjs/common";

export class LoggingException extends HttpException {
  public metadata: object = {};

  constructor(message: string, status: number, metadata?: object) {
    super(message, status);
    if (metadata) {
      this.metadata = metadata;
    }
  }
}
