import { Global, Module } from '@nestjs/common';
import { Logger } from './Logger.service';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [ConfigService, Logger],
  exports: [Logger],
})
export class LoggerModule {}
