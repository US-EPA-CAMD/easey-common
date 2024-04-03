import { registerDecorator, ValidationArguments } from "class-validator";
import { BeginEndDatesConsistentOptions } from "../interfaces/validator-options.interface";
import { BeginEndDatesConsistentFrmConstraint } from "../constraints/begin-end-dates-consistent-frm.constraint";

export function BeginEndDatesConsistentFrm(
  code: string,
  formatValues: object | ((args: ValidationArguments) => object),
  validationOptions: BeginEndDatesConsistentOptions = {}
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
      name: "beginEndDatesConsistentFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [
        {
          beginDate,
          beginHour,
          beginMinute,
          code,
          endDate,
          endHour,
          endMinute,
          formatValues,
        },
      ],
      validator: BeginEndDatesConsistentFrmConstraint,
    });
  };
}
