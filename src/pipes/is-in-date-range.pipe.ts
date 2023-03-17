import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsInDateRange(
  minDate: Date,
  yearOnly: boolean,
  reportingQuarter: boolean,
  isAnnual: boolean,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isInDateRange",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            if (
              isAnnual &&
              (value === "1980" || value === "1985" || value === "1990")
            ) {
              return true;
            }

            const curDate = new Date(Date.now());
            const curYear = curDate.getFullYear();
            const dateObject = yearOnly
              ? new Date(value as number, 0)
              : new Date(value);

            if (reportingQuarter) {
              if (curDate < new Date(`March 31, ${curYear}`)) {
                return (
                  dateObject >= minDate &&
                  dateObject <= curDate &&
                  dateObject <= new Date(`December 31, ${curYear - 1}`)
                );
              } else if (curDate < new Date(`June 30, ${curYear}`)) {
                return (
                  dateObject >= minDate &&
                  dateObject <= curDate &&
                  dateObject <= new Date(`March 31, ${curYear}`)
                );
              } else if (curDate < new Date(`September 30, ${curYear}`)) {
                return (
                  dateObject >= minDate &&
                  dateObject <= curDate &&
                  dateObject <= new Date(`June 30, ${curYear}`)
                );
              } else if (curDate < new Date(`December 31, ${curYear}`)) {
                return (
                  dateObject >= minDate &&
                  dateObject <= curDate &&
                  dateObject <= new Date(`September 30, ${curYear}`)
                );
              } else {
                return (
                  dateObject >= minDate &&
                  dateObject <= curDate &&
                  dateObject <= new Date(`December 31, ${curYear}`)
                );
              }
            }
            return dateObject >= minDate && dateObject <= curDate;
          }
          return true;
        },
      },
    });
  };
}
