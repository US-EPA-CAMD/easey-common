import * as helmet from "helmet";
import { json } from "body-parser";
import { useContainer } from "class-validator";
import { ConfigService } from "@nestjs/config";
import { INestApplication, ValidationPipe } from "@nestjs/common";

import { Logger } from "../logger";
import { LoggingInterceptor } from "../interceptors";
import { CorsOptionsService } from "../cors-options";

export async function applyMiddleware(
  module: any,
  app: INestApplication,
  allowCredentials: boolean = false,
  useServiceContainers: boolean = false,
) {
  app.useGlobalInterceptors(
    new LoggingInterceptor(new Logger())
  );

  if (useServiceContainers === true) {
    useContainer(
      app.select(module),
      { fallbackOnErrors: true }
    );
  }

  const configService = app.get(ConfigService);
  const corsOptionsService = app.get(CorsOptionsService);

  const appEnv = configService.get<string>("app.env");
  const appPath = configService.get<string>("app.path");
  const enableCors = configService.get<boolean>("app.enableCors");
  const reqSizeLimit = configService.get<string>("app.reqSizeLimit");
  const enableGlobalValidationPipes = configService.get<boolean>("app.enableGlobalValidationPipes");

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          baseUri: ["'self'"],
          blockAllMixedContent: [],
          fontSrc: ["'self'", "https:", "data:"],
          frameAncestors: ["'self'"],
          imgSrc: ["'self'", "data:"],
          objectSrc: ["'none'"],
          scriptSrc: ["'self'"],
          scriptSrcAttr: ["'none'"],
          styleSrc: ["'self'", "https:", "'unsafe-inline'"],
          upgradeInsecureRequests: [],
          connectSrc: ["'self'", "api.epa.gov"],
        },
      },
    })
  );

  app.setGlobalPrefix(appPath);
  app.use(json({ limit: reqSizeLimit }));

  if (enableGlobalValidationPipes) {
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true
      })
    );
  }

  if (enableCors) {
    app.enableCors(async (req, callback) => {
      await corsOptionsService.configure(
        req,
        appEnv,
        callback,
        allowCredentials,
      );
    });
  }
}

export default applyMiddleware;
