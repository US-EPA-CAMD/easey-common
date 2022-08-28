import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";

import { applySwagger } from "./applySwagger";
import { applyMiddleware } from "./applyMiddleware";

export async function bootstrap(
  module: any,
  allowCredentials: boolean = false,
  useServiceContainers: boolean = false
) {
  const app = await NestFactory.create(module);
  applyMiddleware(module, app, allowCredentials, useServiceContainers);
  applySwagger(app);

  const configService = app.get(ConfigService);
  const appPath = configService.get<string>("app.path");
  const appPort = configService.get<number>("app.port");

  const server = await app.listen(appPort);
  server.setTimeout(1800000);

  console.log(
    `Application is running on: ${await app.getUrl()}/${appPath}/swagger`
  );
}
