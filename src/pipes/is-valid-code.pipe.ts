import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindManyOptions } from "typeorm";
import { IsValidCodeValidator } from "../validators/is-valid-code.validator";

export function IsValidCode(
  type: any,
  validationOptions?: ValidationOptions,
  findOption?: (ValidationArguments: ValidationArguments) => FindManyOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidCode",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ type, findOption }],
      validator: IsValidCodeValidator,
    });
  };
}
