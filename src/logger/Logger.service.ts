import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
const winston = require('winston');

interface LogInterface {
  warn: (message: string, args?: any[]) => void;
  error: (errorType: Error, message: string, throws?: boolean, args?: any[]) => void;
  info: (message: string, args?: any[]) => void;
}

@Injectable()
export class Logger implements LogInterface {
  private logInstance;

  constructor() {
    this.logInstance = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });
  }

  warn(message, args?): void {
    this.logInstance.warn(message, { ...args });
  }

  error(errorType, message, throws = false, args?): string {
    const errorId = uuid();
    const errorInstance = new errorType(message, errorId);

    this.logInstance.error(errorInstance.message, {
      ...args,
      errorId: errorId,
      stack: errorInstance.stack,
    });

    if(throws){
      throw errorInstance;
    }

    return  errorId;
  }

  info(message, args?): void {
    this.logInstance.log('info', message, { ...args });
  }
}
export default Logger;