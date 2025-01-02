import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isNumberString,
} from "class-validator";

export function isInRange(value: any, minVal: number, maxVal: number, isMinValValid?: boolean, isMaxValValid?: boolean): boolean {
  if (value !== null) {
    if (typeof value === "number") {
      if (!isMinValValid && !isMaxValValid) {
        return value > minVal && value < maxVal;
      }

      if (!isMinValValid) {
        return value > minVal && value <= maxVal;
      }

      if (!isMaxValValid) {
        return value >= minVal && value < maxVal;
      }

      return value >= minVal && value <= maxVal;
    }

    if (!isMinValValid && !isMaxValValid) {
      return (
        isNumberString(value, { no_symbols: true }) &&
        (value as number) > minVal &&
        (value as number) < maxVal
      );
    }

    if (!isMinValValid) {
      return (
        isNumberString(value, { no_symbols: true }) &&
        (value as number) > minVal &&
        (value as number) <= maxVal
      );
    }

    if (!isMaxValValid) {
      return (
        isNumberString(value, { no_symbols: true }) &&
        (value as number) >= minVal &&
        (value as number) < maxVal
      );
    }

    return (
      isNumberString(value, { no_symbols: true }) &&
      (value as number) >= minVal &&
      (value as number) <= maxVal
    );
  }
  return true;

}

export function IsInRange(
  minVal: number,
  maxVal: number,
  validationOptions?: ValidationOptions,
  isMinValValid: boolean = true,
  isMaxValValid: boolean = true
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsInRange",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isInRange(value, minVal, maxVal, isMinValValid, isMaxValValid);
        },
        defaultMessage: ({ property }: ValidationArguments) => {
          return `The ${property} must be within the range of ${minVal} and ${maxVal}`;
        },
      },
    });
  };
}
