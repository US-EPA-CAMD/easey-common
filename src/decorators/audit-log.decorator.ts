import { applyDecorators, SetMetadata, UseInterceptors } from "@nestjs/common";

import { LoggingInterceptor } from "../interceptors";
import { AuditLogMetadata } from "../interfaces";

const METADATA_KEY = 'auditLog';

export function AuditLog({
  infields = [],
  label = '',
  outFields = [],
  bodyOutFields = [],
  paramsOutFields = [],
  queryOutFields = [],
  requestInFields = [],
}: AuditLogMetadata = {}) {
  return applyDecorators(
    SetMetadata(METADATA_KEY, { infields, label, outFields, bodyOutFields, paramsOutFields, queryOutFields, requestInFields }),
    UseInterceptors(LoggingInterceptor),
  );
}

export default AuditLog;
