import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindOneOptions } from "typeorm";
import { DbLookupValidator } from "../validators/db-lookup.validator";

export function DbLookup(
  type: any,
  findOption?: (validationArguments: ValidationArguments) => FindOneOptions,
  validationOptions?: ValidationOptions,
  ignoreEmpty = true
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "dbLookup",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ ignoreEmpty, type, findOption }],
      validator: DbLookupValidator,
    });
  };
}
