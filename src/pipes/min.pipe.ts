import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isNumberString,
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
						return (
							isNumberString(value, { no_symbols: true }) &&
							(value as number) >= minVal
						);
					}
          return true;
        },
      },
    });
  };
}
