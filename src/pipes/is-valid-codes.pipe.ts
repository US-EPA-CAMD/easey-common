import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindManyOptions } from "typeorm";
import { IsValidCodesValidator } from "../validators/is-valid-codes.validator";

export function IsValidCodes(
  type: any,
  findOption?: (ValidationArguments: ValidationArguments) => FindManyOptions,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidCodes",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ type, findOption }],
      validator: IsValidCodesValidator,
    });
  };
}
