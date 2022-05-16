import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

/**
 * This decorator takes in a date property - in the same object - as a parameter
 */
export function IsDateInRangeLimit(
  property: string,
  yearRange: number,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isDateInRangeLimit",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: Date, args: ValidationArguments) {
          const seconds = yearRange * 365.5 * 24 * 60 * 60 * 1000;
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as Date)[relatedPropertyName];
          if (value && relatedValue) {
            let date = new Date(value);
            let relatedDate = new Date(relatedValue);
            return date.valueOf() - relatedDate.valueOf() <= seconds;
          }
          return true;
        },
      },
    });
  };
}
