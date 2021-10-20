import { Global, Module } from "@nestjs/common";
import { CorsOptionsService } from "./cors-options.service";

@Global()
@Module({
  providers: [CorsOptionsService],
  exports: [CorsOptionsService],
})
export class CorsOptionsModule {}
