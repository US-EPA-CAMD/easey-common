import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { FrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator that confirms a value is not negative and formats the error message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "isNotNegativeFrm", async: false })
export class IsNotNegativeFrmConstraint
  implements ValidatorConstraintInterface
{
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, _args: ValidationArguments) {
    if (value) {
      if (typeof value === "number") {
        if (value < 0) {
          return false;
        }
      }
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
