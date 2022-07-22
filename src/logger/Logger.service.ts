import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";

const winston = require("winston");
//
interface LogInterface {
  warn: (message: string, args?: any[]) => void;
  error: (
    errorType: Error,
    message: string,
    throws?: boolean,
    args?: any[]
  ) => void;
  info: (message: string, args?: any[]) => void;
}

@Injectable()
export class Logger implements LogInterface {
  private logInstance;

  constructor() {
    this.logInstance = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });
  }

  warn(message, args?): void {
    this.logInstance.warn(message, { ...args });
  }

  error(error): string {
    const errorId = uuid();

    this.logInstance.error(error.message, {
      ...error.metadata,
      errorId: errorId,
      stack: error.stack,
    });

    return errorId;
  }

  info(message, args?): void {
    this.logInstance.log("info", message, { ...args });
  }
}
export default Logger;
