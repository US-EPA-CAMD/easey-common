import isEmailValidator from "validator/lib/isEmail";
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";

export function IsEmail(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsEmail",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value !== null) {
            return typeof value === "string" && isEmailValidator(value);
          }
          return true;
        },
      },
    });
  };
}
