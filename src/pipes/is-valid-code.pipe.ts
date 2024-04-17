import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindOneOptions } from "typeorm";
import { DbLookupValidator } from "../validators/db-lookup.validator";

export function IsValidCode(
  type: any,
  validationOptions?: ValidationOptions,
  findOption?: (ValidationArguments: ValidationArguments) => FindOneOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidCode",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [
        { type, findOption: findOption ?? "primary", ignoreEmpty: true },
      ],
      validator: DbLookupValidator,
    });
  };
}
