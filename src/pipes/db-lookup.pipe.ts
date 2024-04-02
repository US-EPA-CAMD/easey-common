import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindOneOptions } from "typeorm";
import { DbLookupConstraint } from "../constraints/db-lookup.constraint";

export function DbLookup(
  type: any,
  findOption: (validationArguments: ValidationArguments) => FindOneOptions,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "dbLookup",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{ type, findOption }],
      validator: DbLookupConstraint,
    });
  };
}
