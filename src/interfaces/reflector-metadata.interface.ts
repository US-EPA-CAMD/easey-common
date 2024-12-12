export interface AuditLogMetadata {
  label?: string;
  omitFields?: string[];
  requestBodyOutFields?: string[] | '*' | 'all';
  requestHeadersOutFields?: string[] | '*' | 'all';
  requestParamsOutFields?: string[] | '*' | 'all';
  requestQueryOutFields?: string[] | '*' | 'all';
  responseBodyOutFields?: string[] | '*' | 'all';
}
