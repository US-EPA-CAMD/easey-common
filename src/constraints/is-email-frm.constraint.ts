import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import isEmailValidator from "validator/lib/isEmail";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { FrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator constraint that confirms a string is in the form of an email and formats the error message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "isEmailFrm", async: false })
export class IsEmailFrmConstraint implements ValidatorConstraintInterface {
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, _args: ValidationArguments) {
    if (value !== null) {
      return typeof value === "string" && isEmailValidator(value);
    }
    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    const { code, formatValues }: FrmOptions = args.constraints[0];
    return this.checkCatalogService.formatResultMessage(
      code,
      typeof formatValues === "function" ? formatValues(args) : formatValues
    );
  }
}
