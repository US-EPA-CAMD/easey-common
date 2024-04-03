import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { MaxFrmOptions } from "../interfaces/validator-options.interface";

/**
 * A custom validator that confirms a value is less than a maximum and formats the result message (if any) using the `CheckCatalogService`.
 */
@Injectable()
@ValidatorConstraint({ name: "maxFrm", async: false })
export class MaxFrmConstraint implements ValidatorConstraintInterface {
  constructor(private readonly checkCatalogService: CheckCatalogService) {}

  validate(value: any, args: ValidationArguments) {
    const { maxVal }: MaxFrmOptions = args.constraints[0];
    if (value !== null) {
      if (typeof value === "number") {
        return value <= maxVal;
      } else if (typeof value === "string") {
        return parseFloat(value) <= maxVal;
      }
    }
    return true;
  }

  defaultMessage(args?: ValidationArguments): string {
    const { code, key }: MaxFrmOptions = args.constraints[0];
    return this.checkCatalogService.formatResultMessage(code, {
      fieldname: args.property,
      key,
    });
  }
}
