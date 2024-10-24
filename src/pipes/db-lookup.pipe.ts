import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindOneOptions } from "typeorm";
import { DbLookupValidator } from "../validators/db-lookup.validator";

export interface DbLookupConfig {
  type: any;
  findOption?: ((validationArguments: ValidationArguments) => FindOneOptions) | "primary";
  validateNumeric?: boolean;
  ignoreEmpty?: boolean;
}

export function DbLookup(
  config: DbLookupConfig,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "dbLookup",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{
        ignoreEmpty: config.ignoreEmpty ?? true,
        validateNumeric: config.validateNumeric ?? false,
        type: config.type,
        findOption: config.findOption
      }],
      validator: DbLookupValidator,
    });
  };
}
