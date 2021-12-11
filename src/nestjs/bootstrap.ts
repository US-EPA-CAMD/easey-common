import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { CorsOptionsService } from '../cors-options/cors-options.service';

export async function bootstrap(
  module: any,
  enableCors: boolean = false,
  enableApiKey: boolean = false,
  enableAuthToken: boolean = false,
  enableGlobalValidationPipe: boolean = false,
  ) {
  const app = await NestFactory.create(module);

  const configService = app.get(ConfigService);
  const corsOptionsService = app.get(CorsOptionsService);

  const appName = configService.get<string>('app.name');
  const appTitle = configService.get<string>('app.title');
  const appPath = configService.get<string>('app.path');
  const appEnv = configService.get<string>('app.env');
  const appHost = configService.get<string>('app.host');
  const apiHost = configService.get<string>('app.apiHost');    
  const appVersion = configService.get<string>('app.version');
  const appPublished = configService.get<string>('app.published');

  let appDesc = null;
  let swaggerCustomOptions = null;

  if (appEnv != 'production') {
    appDesc = `EPA ${appEnv} Environment: The content on this page is not production data and used for <strong>development</strong> and/or <strong>testing</strong> purposes only.`;
    swaggerCustomOptions = {
      customCss:
        '.description .renderedMarkdown p { color: #FC0; padding: 10px; background: linear-gradient(to bottom,#520001 0%,#6c0810 100%); }',
    };
  }

  app.use(helmet());
  app.setGlobalPrefix(appPath);

  if (enableGlobalValidationPipe) {
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
  }

  if (enableCors) {
    app.enableCors(async (req, callback) => {
      await corsOptionsService.configure(req, appName, callback);
    });
  }

  const swaggerDocOptions = new DocumentBuilder()
    .setTitle(`${appTitle} OpenAPI Specification`)
    .setDescription(appDesc)
    .setVersion(`${appVersion} published: ${appPublished}`);

  if (enableApiKey) {
    swaggerDocOptions.addApiKey({
      in: 'header',
      type: 'apiKey',
      name: 'x-api-key',
      description: 'API Key required via "x-api-key" request header!',
    }, 'APIKey');
  }

  if (enableAuthToken) {
    swaggerDocOptions.addBearerAuth({
      in: 'header',
      type: 'http',
      scheme: 'bearer',
      name: 'Token',
      description: 'Authorization "bearer" token required for data modification operations!',
    }, 'Token');
  }

  if (appHost !== 'localhost') {
    swaggerDocOptions.addServer(`https://${apiHost}`);
  }

  const document = SwaggerModule.createDocument(app, swaggerDocOptions.build());
  SwaggerModule.setup(
    `${appPath}/swagger`,
    app,
    document,
    swaggerCustomOptions,
  );

  await app.listen(configService.get<number>('app.port'));
  console.log(
    `Application is running on: ${await app.getUrl()}/${appPath}/swagger`,
  );
};
