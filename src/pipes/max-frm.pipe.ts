import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { MaxFrmConstraint } from "../constraints/max-frm.constraint";

/**
 * A wrapper around the `Max` validator that formats the result message using the `CheckCatalogService`.
 */
export function MaxFrm(
  code: string,
  formatValues: object | ((args: ValidationArguments) => object),
  maxVal: number,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "maxFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, formatValues, maxVal }],
      validator: MaxFrmConstraint,
    });
  };
}
