import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BulkLoadService } from "./bulk-load.service";

@Module({
  providers: [ConfigService, BulkLoadService],
  exports: [BulkLoadService],
})
export class BulkLoadModule {}
