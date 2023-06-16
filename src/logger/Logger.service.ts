import { ConsoleLogger, Injectable, Scope } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
const winston = require("winston");

@Injectable({ scope: Scope.TRANSIENT })
export class Logger extends ConsoleLogger {
  private logInstance;
  private isDevelopment = false;

  constructor(private readonly configService: ConfigService) {
    super();

    const { combine, prettyPrint, json } = winston.format;

    this.logInstance = winston.createLogger({
      format: combine(json(), prettyPrint()),
      transports: [new winston.transports.Console({})],
    });

    if (this.configService.get<string>("app.env") === "local-dev") {
      this.isDevelopment = true;
    }
  }

  error(message: any, stack?: string, context?: string, args?: object) {
    super.error(message, stack, context);
    if (!this.isDevelopment) {
      //If in local development mode only show the internal errors
      this.logInstance.error(message, { ...args });
    }
  }
}
