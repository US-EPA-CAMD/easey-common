import { applyDecorators, SetMetadata, UseInterceptors } from "@nestjs/common";

import { LoggingInterceptor } from "../interceptors";
import { AuditLogMetadata } from "../interfaces";

const METADATA_KEY = 'auditLog';

export function AuditLog({
  label = '',
  outFields = [],
}: AuditLogMetadata = {}) {
  return applyDecorators(
    SetMetadata(METADATA_KEY, { label, outFields }),
    UseInterceptors(LoggingInterceptor),
  );
}

export default AuditLog;
