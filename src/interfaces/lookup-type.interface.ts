export interface ValidatorParams {
  pathParam?: string;
  bodyParam?: string;
  queryParam?: string;
  importLocationSources?: string[];
  isPipeDelimitted?: boolean;
  enforceCheckout?: boolean;
  permissionsForFacility?: string[];
  requiredRoles?: string[];
}
