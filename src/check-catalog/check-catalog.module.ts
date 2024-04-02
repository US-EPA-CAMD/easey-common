import { DynamicModule, Module } from "@nestjs/common";
import { CheckCatalogService } from "./check-catalog.service";
import { VIEW_NAME } from "./check-catalog.constants";

@Module({})
export class CheckCatalogModule {
  static register(viewName: string): DynamicModule {
    return {
      module: CheckCatalogModule,
      providers: [
        {
          provide: VIEW_NAME,
          useValue: viewName,
        },
        CheckCatalogService,
      ],
      exports: [CheckCatalogService],
    };
  }
}
