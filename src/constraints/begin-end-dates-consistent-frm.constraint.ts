import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { BeginEndDatesConsistentFrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator that confirms a date range is valid and formats the error message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "beginEndDatesConsistentFrm", async: false })
export class BeginEndDatesConsistentFrmConstraint
  implements ValidatorConstraintInterface
{
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

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
  }

  defaultMessage(args: ValidationArguments): string {
    const { code, formatValues }: BeginEndDatesConsistentFrmOptions =
      args.constraints[0];
    return this.checkCatalogService.formatResultMessage(
      code,
      typeof formatValues === "function" ? formatValues(args) : formatValues
    );
  }
}
