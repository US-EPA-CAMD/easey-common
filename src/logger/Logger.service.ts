import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const { createLogger, format, transports } = require('winston');

@Injectable({ scope: Scope.TRANSIENT })
export class Logger extends ConsoleLogger {
  private consoleLogInstance;
  private fileLogInstance;
  private isDevelopment = false;

  constructor(private readonly configService: ConfigService) {
    super();

    const {
      align,
      cli,
      colorize,
      combine,
      level,
      padLevels,
      prettyPrint,
      printf,
      json,
      timestamp,
    } = format;

    this.consoleLogInstance = createLogger({
      format: combine(json(), prettyPrint()),
      transports: [new transports.Console({})],
    });

    if (this.configService.get<string>('app.env') === 'local-dev') {
      this.isDevelopment = true;
      const logFile = this.configService.get<string>('app.logFile');
      const logFileLevel = this.configService.get<string>('app.logFileLevel');
      if (logFile) {
        // Only initialize the file logger in the local environment if the log file is provided.
        const template = printf((info) => {
          return `${timestamp} ${level}: ${message}`;
        });
        this.fileLogInstance = createLogger({
            format: combine(
            format((info) => {
              info.level = info.level.toUpperCase();
              return info;
            })(),
            colorize:({ level: true, message: true }),
            timestamp({ format: 'MM/DD/YYYY h:m:s A' }),
            template,
          ),
          transports: [
            new transports.File({
              filename: logFile,
              ...(logFileLevel ? { level: logFileLevel } : {}),
            }),
          ],
        });
      }
    }
  }

  debug(message: any, context?: string) {
    super.debug(message, context);
    if (this.fileLogInstance) {
      this.fileLogInstance.debug(message);
    }
  }

  error(message: any, stack?: string, context?: string, args?: object) {
    super.error(message, stack, context);
    if (!this.isDevelopment) {
      //If in local development mode only show the internal errors
      this.consoleLogInstance.error(message, { ...args });
    }
  }
}
