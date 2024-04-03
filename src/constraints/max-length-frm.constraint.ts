import {
  maxLength,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { MaxLengthFrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator that confirms a string's length is less than a maximum and formats the result message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "maxLengthFrm", async: false })
export class MaxLengthFrmConstraint implements ValidatorConstraintInterface {
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, args: ValidationArguments) {
    const { maxLength: max }: MaxLengthFrmOptions = args.constraints[0];
    return maxLength(value, max);
  }

  defaultMessage(args: ValidationArguments): string {
    const { code, formatValues }: MaxLengthFrmOptions = args.constraints[0];
    return this.checkCatalogService.formatResultMessage(
      code,
      typeof formatValues === "function" ? formatValues(args) : formatValues
    );
  }
}
