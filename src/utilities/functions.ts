export const parseBool = (
  value: any,
  defaultValue: boolean = false
): boolean => {
  if (typeof value == "number" || value instanceof Number) {
    return value > 0;
  }
  if (typeof value == "boolean" || value instanceof Boolean) {
    return Boolean(value);
  }
  if (typeof value == "string" || value instanceof String) {
    value = value.trim().toLowerCase();
    if (value === "true" || value === "false") {
      return value === "true";
    }
  }

  return defaultValue;
};

export const getConfigValue = (key: string, defaultValue?: any): string => {
  let returnValue: string;

  if (process.env[key]) {
    returnValue = process.env[key];
  }

  return returnValue || defaultValue;
};

export const getConfigValueNumber = (
  key: string,
  defaultValue?: number
): number => {
  return Number(getConfigValue(key, defaultValue));
};

export const getConfigValueBoolean = (
  key: string,
  defaultValue: boolean = false
): boolean => {
  return parseBool(getConfigValue(key, defaultValue));
};

export const dateToEstString = (value?: string | number | Date): string => {
  let date: Date = new Date();

  if (value) {
    if (typeof value !== typeof Date) {
      date = new Date(value);
    } else {
      date = value as Date;
    }
  }

  return date.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
};

export const currentDateTime = (): Date => {
  return new Date(dateToEstString(new Date()));
};
