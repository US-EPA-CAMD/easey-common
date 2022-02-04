import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isNumberString,
} from 'class-validator';

export function Max(
  maxVal: number,
  validationOptions?: ValidationOptions,
) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'Max',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return (
              isNumberString(value, { no_symbols: true }) &&
              (value as number) <= maxVal
            );
          }
          return true;
        },
      },
    });
  };
}
