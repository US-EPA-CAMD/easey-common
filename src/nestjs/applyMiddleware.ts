import * as helmet from "helmet";
import { json } from "body-parser";
import { ValidationError, useContainer } from "class-validator";
import { ConfigService } from "@nestjs/config";
import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";

import { Logger } from "../logger";
import { CorsOptionsService } from "../cors-options";
import { GatewayGuard } from "../guards";
import { EaseyExceptionFilter } from "../filters/easey-exception.filter";
import { EaseyException } from "../exceptions";

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
  app.useGlobalFilters(new EaseyExceptionFilter(new Logger(configService)));

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
    })
  );

  app.setGlobalPrefix(appPath);
  app.use(json({ limit: reqSizeLimit }));

  if (enableGlobalValidationPipes) {
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
          let str: string = "";
          for (const error of errors) {
            const vError: ValidationError = error; //Have to set to a new instance to gain access to the overriden toString without throwing an IDE error
            str += vError.toString(true, undefined, undefined, true) + "\n";
          }

          throw new EaseyException(new Error(str), HttpStatus.BAD_REQUEST);
        },
      })
    );
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
