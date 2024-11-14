export interface AuditLogMetadata {
  infields?: string[] | '*' | 'all';
  label?: string;
  outFields?: string[] | boolean | '*' | 'all';
  bodyOutFields?: string[] | '*' | 'all';
  paramsOutFields?: string[] | '*' | 'all';
  queryOutFields?: string[] | '*' | 'all';
  requestInFields?: string[];
}
