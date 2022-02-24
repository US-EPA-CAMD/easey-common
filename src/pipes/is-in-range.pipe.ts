import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isNumberString,
} from "class-validator";

export function IsInRange(
  minVal: number,
  maxVal: number,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsInRange",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            if (typeof value === "number") {
              return value >= minVal && value <= maxVal;
            }
            //
            return (
              isNumberString(value, { no_symbols: true }) &&
              (value as number) >= minVal &&
              (value as number) <= maxVal
            );
          }
          return true;
        },
      },
    });
  };
}
