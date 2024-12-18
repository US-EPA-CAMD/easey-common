import {
  ApiBadRequestResponse,
  ApiExcludeEndpoint,
  ApiExcludeController,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import {getConfigValue} from "./functions";

const env = getConfigValue('app.env', 'local-dev');
const enableSwagger = [
  'local-dev',
  'dev', 'develop', 'development',
  'tst','test', 'testing',
  'staging', 'stage',
  'perf', 'performance',
].includes(env);

export const BadRequestResponse = () =>
  ApiBadRequestResponse({
    description: 'Invalid Request',
  });

export const NotFoundResponse = () =>
  ApiNotFoundResponse({
    description: 'Resource Not Found',
  });

export function ApiExcludeControllerByEnv() {
  return applyDecorators(ApiExcludeController(!enableSwagger));
}

export function ApiExcludeEndpointByEnv() {
  return applyDecorators(ApiExcludeEndpoint(!enableSwagger));
}