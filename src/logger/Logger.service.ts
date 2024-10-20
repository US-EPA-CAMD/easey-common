import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const { createLogger, format, transports } = require('winston');

@Injectable({ scope: Scope.TRANSIENT })
export class Logger extends ConsoleLogger {
  private consoleLogInstance: ReturnType<typeof createLogger>;
  private fileLogInstance: ReturnType<typeof createLogger>;
  private auditLogInstance: ReturnType<typeof createLogger>;
  private isDevelopment = false;

  constructor(private readonly configService: ConfigService) {
    super();

    const { combine, json, metadata, prettyPrint, timestamp } = format;

    this.consoleLogInstance = createLogger({
      format: combine(json(), prettyPrint()),
      transports: [new transports.Console({})],
    });

    this.auditLogInstance = createLogger({
      format: combine(
        metadata(),
        json(),
        timestamp({ format: 'MM/DD/YYYY h:m:s A' })
      ),
      transports: [new transports.Console({})],
    });

    if (this.configService.get<string>('app.env') === 'local-dev') {
      this.isDevelopment = true;
      const logFile = this.configService.get<string>('app.logFile');
      const logFileLevel = this.configService.get<string>('app.logFileLevel');
      if (logFile) {
        // Only initialize the file logger in the local environment if the log file is provided.
        this.fileLogInstance = createLogger({
          format: combine(
            format((info) => {
              info.level = info.level.toUpperCase();
              return info;
            })(),
            metadata(),
            json(),
            timestamp({ format: 'MM/DD/YYYY h:m:s A' }),
          ),
          transports: [
            new transports.File({
              filename: logFile,
              lazy: true,
              ...(logFileLevel ? { level: logFileLevel } : {}),
            }),
          ],
        });
      }
    }
  }

  debug(message: any, ...optionalParams: [...any, string?]) {
    super.debug(message, ...optionalParams);
    if (this.fileLogInstance) {
      this.fileLogInstance.debug(message, {
        ...(this.context ? { context: this.context } : {}),
        ...(optionalParams.length ? { data: optionalParams } : {}),
      });
    }
  }

  error(message: any, stack?: string, context?: string, args?: object) {
    super.error(message, stack, context);
    if (!this.isDevelopment) {
      //If in local development mode only show the internal errors
      this.consoleLogInstance.error(message, { ...args });
    }
  }

  info(message: any, ...optionalParams: [...any, string?]) {
    super.log(message, ...optionalParams);
    if (this.auditLogInstance) {
      this.auditLogInstance.log('info', message,
        {
          ...(this.context ? { context: this.context } : {}),
          ...(optionalParams.length ? { data: optionalParams } : {}),
        }
      );
    }
  }
}
