import { Injectable } from "@nestjs/common";
const winston = require("winston");

@Injectable()
export class Logger {
  private logInstance;

  constructor() {
    this.logInstance = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });
  }

  warn(message: string, args?: object): void {
    this.logInstance.warn(message, { ...args });
  }

  error(message: string, args?: object): void {
    this.logInstance.error(message, { ...args });
  }

  info(message: string, args?: object): void {
    this.logInstance.log("info", message, { ...args });
  }
}
export default Logger;
