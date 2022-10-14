import { ValueTransformer } from "typeorm";

import { isNullOrUndefined } from "../utilities/is-null-or-undefined";

export class NumericColumnTransformer implements ValueTransformer {
  to(data?: number | null): number | null {
    if (isNullOrUndefined(data)) {
      return null;
    }

    return data;
  }

  from(data?: string | null): number | null {
    if (isNullOrUndefined(data)) {
      return null;
    }

    const res = parseFloat(data);
    if (isNaN(res)) {
      return null;
    } else {
      return res;
    }
  }
}
