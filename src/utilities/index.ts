export { parseToken } from "./parse-token";
export { Regex } from "./regex";
export { ResponseHeaders } from "./response.headers";

export const parseBool = (value: any, defaultValue = false) => {
  if (typeof value == 'number' || value instanceof Number) {
    return value > 0;
  }
  if (typeof value == 'boolean' || value instanceof Boolean) {
    return value;
  }
  if (typeof value == 'string' || value instanceof String) {
    value = value.trim().toLowerCase();
    if (value === 'true' || value === 'false') {
      return value === 'true';
    }
  }
  
  return defaultValue;
}
