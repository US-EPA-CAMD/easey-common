import { ConsoleLogger, Injectable, LogLevel, Scope } from '@nestjs/common';
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

    const { combine, json, metadata, prettyPrint, printf, timestamp } = format;

    this.consoleLogInstance = createLogger({
      format: combine(json(), prettyPrint()),
      transports: [new transports.Console({})],
    });

    const infoFormat = printf(({ message }) => {
      return `${message}`;
    });

    this.auditLogInstance = createLogger({
      format: combine(json(), infoFormat),
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

    // Filter the log levels based on the environment.
    const levels: LogLevel[] = ['log', 'error'];
    if (this.configService.get<string>('app.enableDebug')) {
      levels.push('debug');
    }
    if (this.isDevelopment) {
      levels.push('verbose', 'warn');
    }
    this.setLogLevels(levels);
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
    super.log(JSON.stringify(message), ...optionalParams);
  }

  auditLog(message: any, ...optionalParams: [...any, string?]) {
    if (this.configService.get<boolean>('app.enableAuditLog')) {
      this.auditLogInstance.info(JSON.stringify(message), ...optionalParams);
    }
  }
}
