import { registerDecorator, ValidationArguments } from "class-validator";
import { BeginEndDatesConsistentOptions } from "../interfaces/validator-options.interface";

export function BeginEndDatesConsistent(
  validationOptions: BeginEndDatesConsistentOptions
) {
  return function (object: Object, propertyName: string) {
    const {
      beginDate = "beginDate",
      beginHour = "beginHour",
      beginMinute = "beginMinute",
      endDate = "endDate",
      endHour = "endHour",
      endMinute = "endMinute",
    } = validationOptions;
    registerDecorator({
      name: "beginEndDatesConsistent",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [
        {
          beginDate,
          beginHour,
          beginMinute,
          endDate,
          endHour,
          endMinute,
        },
      ],
      validator: {
        validate(_value: any, args: ValidationArguments) {
          const [
            {
              beginDate: beginDateField,
              beginHour: beginHourField,
              beginMinute: beginMinuteField,
              endDate: endDateField,
              endHour: endHourField,
              endMinute: endMinuteField,
            },
          ] = args.constraints[0];

          // Can't validate when missing required field
          if (
            args.object[beginDateField] == null ||
            args.object[endDateField] == null
          )
            return true;

          const beginDate = new Date(args.object[beginDateField] + "T00:00:00");
          if (args.object[beginHourField] !== undefined) {
            // Can't validate when missing required field
            if (args.object[beginHourField] == null) return true;

            beginDate.setHours(args.object[beginHourField]);
          }

          if (args.object[beginMinuteField] !== undefined) {
            // Can't validate when missing required field
            if (args.object[beginMinuteField] == null) return true;

            beginDate.setMinutes(args.object[beginMinuteField]);
          }

          const endDate = new Date(args.object[endDateField] + "T00:00:00");
          if (args.object[endHourField] !== undefined) {
            // Can't validate when missing required field
            if (args.object[endHourField] == null) return true;

            endDate.setHours(args.object[endHourField]);
          }

          if (args.object[endMinuteField] !== undefined) {
            // Can't validate when missing required field
            if (args.object[endMinuteField] == null) return true;

            endDate.setMinutes(args.object[endMinuteField]);
          }

          return endDate >= beginDate;
        },
      },
    });
  };
}
