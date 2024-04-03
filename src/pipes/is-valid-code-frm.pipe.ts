import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindManyOptions } from "typeorm";
import { IsValidCodeFrmConstraint } from "../constraints/is-valid-code-frm.constraint";

export function IsValidCodeFrm(
  code: string,
  formatValues:
    | Record<string, string | number>
    | ((args: ValidationArguments) => Record<string, string | number>),
  type: any,
  validationOptions?: ValidationOptions,
  findOption?: (ValidationArguments: ValidationArguments) => FindManyOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidCodeFrm",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ code, formatValues, type, findOption }],
      validator: IsValidCodeFrmConstraint,
    });
  };
}
