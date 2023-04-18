import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function Max(maxVal: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "Max",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value !== null) {
            if (typeof value === "number") {
              return value <= maxVal;
            } else if (typeof value === "string") {
              return parseFloat(value) <= maxVal;
            }
          }
          return true;
      },
    });
  };
}
