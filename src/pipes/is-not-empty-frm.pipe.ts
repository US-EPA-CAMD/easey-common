import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { IsNotEmptyFrmConstraint } from "../constraints/is-not-empty-frm.constraint";

/**
 * A wrapper around the `IsNotEmpty` validator that formats the result message using the `CheckCatalogService`.
 */
export function IsNotEmptyFrm(
  code: string,
  formatValues: object | ((args: ValidationArguments) => object),
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNotEmptyFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, formatValues }],
      validator: IsNotEmptyFrmConstraint,
    });
  };
}
