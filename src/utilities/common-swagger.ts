import {
  ApiBadRequestResponse, ApiExcludeEndpoint,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

/**
 * The decorators that depend on environment-based configuration (e.g., ApiExcludeControllerByEnv, ApiExcludeEndpointByEnv)
 * must reside in the backend API itself (such as easey-auth-api) rather than in easey-common. This is because calling
 * functions like getConfigValue('EASEY_AUTH_API_ENV', 'local-dev') at the time decorators are defined in easey-common occurs
 * too early (before the backend’s configuration and dependency injection context are established)
 * leading to undefined values.

 * In contrast, decorators that do not rely on environment variables (e.g., BadRequestResponse, NotFoundResponse)
 * can be safely placed in easey-common. We can still centralize environment-dependent logic by putting functions
 * like shouldIncludeInSwaggerDoc in easey-common. This way, environment checks occur at runtime within the backend
 * API, ensuring that configuration is fully initialized and available at the time of evaluation.
 */

export function shouldIncludeInSwaggerDoc(env: string): boolean {
  return [
    'local-dev',
    'dev', 'develop', 'development',
    'tst', 'test', 'testing',
    'staging', 'stage',
    'perf', 'performance',
  ].includes(env);
}

export const BadRequestResponse = () =>
  ApiBadRequestResponse({
    description: 'Invalid Request',
  });

export const NotFoundResponse = () =>
  ApiNotFoundResponse({
    description: 'Resource Not Found',
  });
