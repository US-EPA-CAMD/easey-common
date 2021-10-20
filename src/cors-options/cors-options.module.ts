import { Module } from "@nestjs/common";
import { CorsOptionsService } from "./cors-options.service";

@Module({
  imports: [],
  providers: [CorsOptionsService],
  exports: [CorsOptionsService],
})
export class CorsOptionsModule {}
