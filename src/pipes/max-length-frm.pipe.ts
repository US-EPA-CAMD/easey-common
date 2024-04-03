import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";
import { MaxLengthFrmConstraint } from "../constraints/max-length-frm.constraint";

/**
 * A wrapper around the `MaxLength` validator that formats the result message using the `CheckCatalogService`.
 */
export function MaxLengthFrm(
  code: string,
  formatValues: object | ((args: ValidationArguments) => object),
  maxLength: number,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "maxLengthFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, formatValues, maxLength }],
      validator: MaxLengthFrmConstraint,
    });
  };
}
