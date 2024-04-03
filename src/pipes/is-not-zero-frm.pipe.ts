import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { IsNotZeroFrmConstraint } from "../constraints/is-not-zero-frm.constraint";

/**
 * A wrapper around the `IsNotZero` validator that formats the result message using the `CheckCatalogService`.
 */
export function IsNotZeroFrm(
  code: string,
  formatValues:
    | Record<string, string | number>
    | ((args: ValidationArguments) => Record<string, string | number>),
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNotZeroFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, formatValues }],
      validator: IsNotZeroFrmConstraint,
    });
  };
}
