import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { MinFrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator that confirms a value exceeds a minimum and formats the result message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "minFrm", async: false })
export class MinFrmConstraint implements ValidatorConstraintInterface {
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, args: ValidationArguments) {
    const { minVal }: MinFrmOptions = args.constraints[0];
    if (value !== null) {
      if (typeof value === "number") {
        return value >= minVal;
      } else if (typeof value === "string") {
        return parseFloat(value) >= minVal;
      }
    }
    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    const { code, formatValues }: MinFrmOptions = args.constraints[0];
    return this.checkCatalogService.formatResultMessage(
      code,
      typeof formatValues === "function" ? formatValues(args) : formatValues
    );
  }
}
