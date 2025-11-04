import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorsOptionsService } from "./cors-options.service";

// Added TypeOrmModule since typeorm was updated
@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [CorsOptionsService],
  exports: [CorsOptionsService],
})
export class CorsOptionsModule {}
