import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isNumberString,
} from "class-validator";

export function IsValidNumber(
  maxNumber: number,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsValidNumber",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return (
              isNumberString(value, { no_symbols: true }) &&
              (value as number) > 0 &&
              (value as number) <= maxNumber
            );
          }
          return true;
        },
      },
    });
  };
}
