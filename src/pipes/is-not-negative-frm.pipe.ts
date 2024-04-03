import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { IsNotNegativeFrmConstraint } from "../constraints/is-not-negative-frm.constraint";

/**
 * A wrapper around the `IsNotNegative` validator that formats the result message using the `CheckCatalogService`.
 */
export function IsNotNegativeFrm(
  code: string,
  formatValues:
    | Record<string, string | number>
    | ((args: ValidationArguments) => Record<string, string | number>),
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNotNegativeFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, formatValues }],
      validator: IsNotNegativeFrmConstraint,
    });
  };
}
