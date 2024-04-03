import { registerDecorator, ValidationOptions } from "class-validator";
import { IsNotZeroFrmConstraint } from "../constraints/is-not-zero-frm.constraint";

/**
 * A wrapper around the `IsNotZero` validator that formats the result message using the `CheckCatalogService`.
 */
export function IsNotZeroFrm(
  code: string,
  key: string,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNotZeroFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, key }],
      validator: IsNotZeroFrmConstraint,
    });
  };
}
