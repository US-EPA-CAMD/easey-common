import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function Min(minVal: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "Min",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value !== null) {
            if (typeof value === "number") {
              return value >= minVal;
            } else if (typeof value === "string") {
              return parseFloat(value) >= minVal;
            }
          }
          return true;
        },
      },
    });
  };
}
