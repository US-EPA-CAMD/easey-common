import { applyDecorators, SetMetadata, UseInterceptors } from "@nestjs/common";

import { LoggingInterceptor } from "../interceptors";
import { AuditLogMetadata } from "../interfaces";

const METADATA_KEY = 'auditLog';

export function AuditLog({
  label = '',
  omitFields = [],
  requestBodyOutFields = [],
  requestHeadersOutFields = [],
  requestParamsOutFields = [],
  requestQueryOutFields = [],
  responseBodyOutFields = [],
}: AuditLogMetadata = {}) {
  return applyDecorators(
    SetMetadata(METADATA_KEY, { label, omitFields, requestBodyOutFields, requestHeadersOutFields, requestParamsOutFields, requestQueryOutFields, responseBodyOutFields }),
    UseInterceptors(LoggingInterceptor),
  );
}

export default AuditLog;
