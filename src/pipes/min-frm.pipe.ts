import { registerDecorator, ValidationOptions } from "class-validator";
import { MinFrmConstraint } from "../constraints/min-frm.constraint";

/**
 * A wrapper around the `Min` validator that formats the result message using the `CheckCatalogService`.
 */
export function MinFrm(
  code: string,
  key: string,
  minVal: number,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "minFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, key, minVal }],
      validator: MinFrmConstraint,
    });
  };
}
