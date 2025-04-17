import { EntityManager, Repository } from "typeorm";

export const parseBool = (
  value: any,
  defaultValue: boolean = false
): boolean => {
  if (typeof value === "number") {
    return value > 0;
  }
  if (value instanceof Number) {
    return value.valueOf() > 0;
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

/**
 * Wrapper around `Promise.allSettled` that throws an error if any promises are rejected (as a JSON stringified array of error messages).
 */
export const settlePromises = async <T>(promises: Array<Promise<T>>) => {
  const { values, errors } = (await Promise.allSettled(promises)).reduce<{
    values: T[];
    errors: unknown[];
  }>(
    (acc, result) => {
      if (result.status === 'fulfilled') {
        acc.values.push(result.value);
      } else {
        let reason = result.reason;
        try {
          // If the reason is already a JSON string, parse it.
          const parsed = JSON.parse(reason.message);
          // If it's an array, flatten it; otherwise, wrap it in an array.
          reason = Array.isArray(parsed) ? parsed : [parsed];
        } catch {
          // If parsing fails, just store the message as a single-element array.
          reason = [reason.message];
        }
        acc.errors.push(...reason); // Flatten errors into the main array
      }
      return acc;
    },
    { values: [], errors: [] },
  );

  if (errors.length > 0) {
    const distinctErrors = Array.from(new Set(errors));
    throw new Error(JSON.stringify(distinctErrors));
  }

  return values;
};

/**
 * Pass a transaction manager, if it exists, to a custom repository. If not, return the original repository.
 */
export const withTransaction = <E, T extends Repository<E>>(
  repository: T,
  trx?: EntityManager,
) => {
  if (!trx) return repository;

  const repositoryConstructor = repository.constructor as {
    new (manager: EntityManager): T;
  };

  const {
    target,
    manager,
    queryRunner,
    ...otherRepositoryProperties
  } = repository;

  return Object.assign(new repositoryConstructor(trx), {
    ...otherRepositoryProperties,
  });
};
