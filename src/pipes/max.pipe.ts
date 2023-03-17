import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

function max(num, max) {
  return typeof num === "number" && typeof max === "number" && num <= max;
}

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
            return max(value, maxVal);
          }
          return true;
        },
      },
    });
  };
}
