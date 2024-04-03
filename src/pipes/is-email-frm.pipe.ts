import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { IsEmailFrmConstraint } from "../constraints/is-email-frm.constraint";

/**
 * A wrapper around the `IsEmail` validator that formats the result message using the `CheckCatalogService`.
 */
export function IsEmailFrm(
  code: string,
  formatValues: object | ((args: ValidationArguments) => object),
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isEmailFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, formatValues }],
      validator: IsEmailFrmConstraint,
    });
  };
}
