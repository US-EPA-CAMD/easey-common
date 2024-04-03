import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { FrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator that confirms a value is not zero and formats the error message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "isNotZeroFrm", async: false })
export class IsNotZeroFrmConstraint implements ValidatorConstraintInterface {
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, _args: ValidationArguments) {
    if (value) {
      if (typeof value === "number") {
        if (value === 0) {
          return false;
        }
      }
    }
    return true;
  }

  defaultMessage(args?: ValidationArguments): string {
    const { code, key }: FrmOptions = args.constraints[0];
    return this.checkCatalogService.formatResultMessage(code, {
      fieldname: args.property,
      key,
    });
  }
}
