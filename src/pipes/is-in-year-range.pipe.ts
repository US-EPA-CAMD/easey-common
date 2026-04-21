import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isNumberString,
} from "class-validator";

export function IsInYearRange(
  minYear: number,
  maxYear: number | null,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsInYearRange",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          if (value === null || value === undefined) {
            return true;
          }

          const effectiveMaxYear =
            maxYear !== null && maxYear !== undefined
              ? maxYear
              : new Date().getFullYear();

          if (typeof value === "number") {
            return value >= minYear && value <= effectiveMaxYear;
          }

          return (
            isNumberString(value, { no_symbols: true }) &&
            (value as number) >= minYear &&
            (value as number) <= effectiveMaxYear
          );
        },
        defaultMessage: ({ property }: ValidationArguments) => {
          const effectiveMaxYear =
            maxYear !== null && maxYear !== undefined
              ? maxYear
              : new Date().getFullYear();
          return `The ${property} must be within the range of ${minYear} and ${effectiveMaxYear}`;
        },
      },
    });
  };
}
