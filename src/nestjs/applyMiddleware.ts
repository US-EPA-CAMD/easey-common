import helmet from "helmet";
import { json } from "body-parser";
import { useContainer } from "class-validator";
import { ConfigService } from "@nestjs/config";
import { INestApplication } from "@nestjs/common";

import { Logger } from "../logger";
import { CorsOptionsService } from "../cors-options";
import { GatewayGuard } from "../guards";
import { EaseyExceptionFilter } from "../filters/easey-exception.filter";
import { EaseyValidationPipe } from "../pipes";

export async function applyMiddleware(
  module: any,
  app: INestApplication,
  allowCredentials: boolean = false,
  useServiceContainers: boolean = false
) {
  const configService = app.get(ConfigService);
  const corsOptionsService = app.get(CorsOptionsService);
  const appEnv = configService.get<string>("app.env");
  const appPath = configService.get<string>("app.path");
  const enableCors = configService.get<boolean>("app.enableCors");
  const reqSizeLimit = configService.get<string>("app.reqSizeLimit");
  const enableSecretToken = configService.get<boolean>("app.enableSecretToken");
  const enableGlobalValidationPipes = configService.get<boolean>(
    "app.enableGlobalValidationPipes"
  );

  app.useLogger(new Logger(configService));
  app.useGlobalFilters(
    new EaseyExceptionFilter(new Logger(configService), configService)
  );

  if (useServiceContainers === true) {
    useContainer(app.select(module), { fallbackOnErrors: true });
  }

  if (enableSecretToken) {
    app.useGlobalGuards(new GatewayGuard(configService));
  }

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
      strictTransportSecurity:false
    })
  );

  app.setGlobalPrefix(appPath);
  app.use(json({ limit: reqSizeLimit }));

  if (enableGlobalValidationPipes) {
    app.useGlobalPipes(new EaseyValidationPipe());
  }

  if (enableCors) {
    app.enableCors(async (req, callback) => {
      await corsOptionsService.configure(
        req,
        appEnv,
        callback,
        allowCredentials
      );
    });
  }
}

export default applyMiddleware;
