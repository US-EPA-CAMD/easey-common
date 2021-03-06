import * as helmet from "helmet";
import { json } from "body-parser";
import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { CorsOptionsService } from "../cors-options/cors-options.service";
import { useContainer } from "class-validator";
import { LoggingInterceptor } from "../interceptors";
import { Logger } from "../logger";

export async function bootstrap(
  module: any,
  allowCredentials: boolean = false,
  useServiceContainers: boolean = false
) {
  const app = await NestFactory.create(module);
  app.useGlobalInterceptors(new LoggingInterceptor(new Logger()));
  if (useServiceContainers === true) {
    useContainer(app.select(module), { fallbackOnErrors: true });
  }

  const configService = app.get(ConfigService);
  const corsOptionsService = app.get(CorsOptionsService);

  const appName = configService.get<string>("app.name");
  const appTitle = configService.get<string>("app.title");
  const appPath = configService.get<string>("app.path");
  const appEnv = configService.get<string>("app.env");
  const appHost = configService.get<string>("app.host");
  const apiHost = configService.get<string>("app.apiHost");
  const appVersion = configService.get<string>("app.version");
  const appPublished = configService.get<string>("app.published");
  const reqSizeLimit = configService.get<string>("app.reqSizeLimit");

  let appDesc = null;
  let swaggerCustomOptions = null;

  if (configService.get<string>("app.description")) {
    if (appEnv != "production") {
      appDesc = `EPA ${appEnv} Environment: The content on this page is not production data and used for <strong>development</strong> and/or <strong>testing</strong> purposes only. <br> <br> ${configService.get<string>(
        "app.description"
      )}`;
      swaggerCustomOptions = {
        customCss:
          ".description .renderedMarkdown p { color: #FC0; padding: 10px; background: linear-gradient(to bottom,#520001 0%,#6c0810 100%); }",
      };
    } else {
      appDesc = configService.get<string>("app.description");
      swaggerCustomOptions = {
        customCss:
          ".description .renderedMarkdown p { color: #000000; padding: 10px; background: linear-gradient(to bottom,#B2BEB5 0%,#A9A9A9 100%); }",
      };
    }
  } else {
    if (appEnv != "production") {
      appDesc = `EPA ${appEnv} Environment: The content on this page is not production data and used for <strong>development</strong> and/or <strong>testing</strong> purposes only.`;

      swaggerCustomOptions = {
        customCss:
          ".description .renderedMarkdown p { color: #FC0; padding: 10px; background: linear-gradient(to bottom,#520001 0%,#6c0810 100%); }",
      };
    }
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

  if (configService.get<boolean>("app.enableGlobalValidationPipes")) {
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
  }

  if (configService.get<boolean>("app.enableCors")) {
    app.enableCors(async (req, callback) => {
      await corsOptionsService.configure(
        req,
        appName,
        callback,
        allowCredentials
      );
    });
  }

  const swaggerDocOptions = new DocumentBuilder()
    .setTitle(`${appTitle} OpenAPI Specification`)
    .setDescription(appDesc)
    .setVersion(`${appVersion} published: ${appPublished}`);

  if (configService.get<boolean>("app.enableApiKey")) {
    swaggerDocOptions.addApiKey(
      {
        in: "header",
        type: "apiKey",
        name: "x-api-key",
        description: 'API Key required via "x-api-key" request header!',
      },
      "APIKey"
    );
  }

  if (configService.get<boolean>("app.enableAuthToken")) {
    swaggerDocOptions.addBearerAuth(
      {
        in: "header",
        type: "http",
        scheme: "bearer",
        name: "Token",
        description:
          'Authorization "bearer" token required for data modification operations',
      },
      "Token"
    );
  }

  if (configService.get<boolean>("app.enableClientToken")) {
    swaggerDocOptions.addBearerAuth(
      {
        in: "header",
        type: "http",
        scheme: "bearer",
        bearerFormat: "jwt",
        name: "ClientToken",
        description:
          'Authorization "bearer" client jwt token required for api endpoints',
      },
      "ClientToken"
    );

    swaggerDocOptions.addApiKey(
      {
        in: "header",
        type: "apiKey",
        name: "x-client-id",
        description: 'ClientId required via "x-client-id" request header',
      },
      "ClientId"
    );
  }

  if (appHost !== "localhost") {
    swaggerDocOptions.addServer(`https://${apiHost}`);
  }

  const document = SwaggerModule.createDocument(app, swaggerDocOptions.build());
  SwaggerModule.setup(
    `${appPath}/swagger`,
    app,
    document,
    swaggerCustomOptions
  );

  const server = await app.listen(configService.get<number>("app.port"));
  server.setTimeout(1800000);

  console.log(
    `Application is running on: ${await app.getUrl()}/${appPath}/swagger`
  );
}
