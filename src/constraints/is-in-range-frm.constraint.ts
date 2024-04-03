import {
  isNumberString,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { IsInRangeFrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator constraint that confirms a value is between a minimum and maximum and formats the result message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "isInRangeFrm", async: false })
export class IsInRangeFrmConstraint implements ValidatorConstraintInterface {
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, args: ValidationArguments) {
    const {
      minVal,
      maxVal,
      isMinValValid,
      isMaxValValid,
    }: IsInRangeFrmOptions = args.constraints[0];
    if (value !== null) {
      if (typeof value === "number") {
        if (!isMinValValid && !isMaxValValid) {
          return value > minVal && value < maxVal;
        }

        if (!isMinValValid) {
          return value > minVal && value <= maxVal;
        }

        if (!isMaxValValid) {
          return value >= minVal && value < maxVal;
        }

        return value >= minVal && value <= maxVal;
      }

      if (!isMinValValid && !isMaxValValid) {
        return (
          isNumberString(value, { no_symbols: true }) &&
          (value as number) > minVal &&
          (value as number) < maxVal
        );
      }

      if (!isMinValValid) {
        return (
          isNumberString(value, { no_symbols: true }) &&
          (value as number) > minVal &&
          (value as number) <= maxVal
        );
      }

      if (!isMaxValValid) {
        return (
          isNumberString(value, { no_symbols: true }) &&
          (value as number) >= minVal &&
          (value as number) < maxVal
        );
      }

      return (
        isNumberString(value, { no_symbols: true }) &&
        (value as number) >= minVal &&
        (value as number) <= maxVal
      );
    }
    return true;
  }

  defaultMessage(args?: ValidationArguments): string {
    const { code, key, minVal, maxVal }: IsInRangeFrmOptions =
      args.constraints[0];
    return this.checkCatalogService.formatResultMessage(code, {
      value: args.value,
      fieldname: args.property,
      key,
      minvalue: minVal,
      maxvalue: maxVal,
    });
  }
}
