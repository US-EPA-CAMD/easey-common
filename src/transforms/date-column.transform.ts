import { ValueTransformer } from "typeorm";

import { isNullOrUndefined } from "../utilities/is-null-or-undefined";

export class DateColumnTransformer implements ValueTransformer {
  to(data?: Date | null): string | null {
    if (isNullOrUndefined(data)) {
      return null;
    }

    return data.toISOString().slice(0, 10);
  }

  from(data?: string | null): Date | null {
    if (isNullOrUndefined(data)) {
      return null;
    }

    if (typeof data === "string") {
      return new Date(data);
    } else {
      return data;
    }
  }
}
