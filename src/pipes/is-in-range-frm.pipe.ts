import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { IsInRangeFrmConstraint } from "../constraints/is-in-range-frm.constraint";

/**
 * A wrapper around the `IsInRange` validator that formats the result message using the `CheckCatalogService`.
 */
export function IsInRangeFrm(
  code: string,
  formatValues: object | ((args: ValidationArguments) => object),
  minVal: number,
  maxVal: number,
  isMinValValid = true,
  isMaxValValid = true,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isInRangeFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [
        { code, formatValues, minVal, maxVal, isMinValValid, isMaxValValid },
      ],
      validator: IsInRangeFrmConstraint,
    });
  };
}
