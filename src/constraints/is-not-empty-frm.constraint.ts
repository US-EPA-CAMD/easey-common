import {
  isNotEmpty,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { FrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator constraint that validates if a value is not empty and formats the result message using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "isNotEmptyFrm", async: false })
export class IsNotEmptyFrmConstraint implements ValidatorConstraintInterface {
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, _args: ValidationArguments) {
    return isNotEmpty(value);
  }

  defaultMessage(args: ValidationArguments): string {
    const { code, formatValues }: FrmOptions = args.constraints[0];
    return this.checkCatalogService.formatResultMessage(
      code,
      typeof formatValues === "function" ? formatValues(args) : formatValues
    );
  }
}
