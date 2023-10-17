import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isNumberString,
} from "class-validator";

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
        },
        defaultMessage: ({ property }: ValidationArguments) => {
          return `The ${property} must be within the range of ${minVal} and ${maxVal}`;
        },
      },
    });
  };
}
