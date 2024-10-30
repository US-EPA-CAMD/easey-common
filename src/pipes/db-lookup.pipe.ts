import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindOneOptions } from "typeorm";
import { DbLookupValidator } from '../validators';
import { DbLookupConfig } from "../interfaces";

/**
 * Database lookup validation decorator
 * @param type - The entity type to validate against
 * @param findOption - Function to generate FindOneOptions or 'primary' for primary key lookup
 * @param validationOptions - Standard class-validator options
 * @param dbLookupConfig - Additional validation configuration options
 */
export function DbLookup(
  type: any,
  findOption: ((validationArguments: ValidationArguments) => FindOneOptions) | "primary",
  validationOptions: ValidationOptions,
  dbLookupConfig: DbLookupConfig = {}
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "dbLookup",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [{
        type,
        findOption,
        validateNumeric: dbLookupConfig.validateNumeric ?? false,
        ignoreEmpty: dbLookupConfig.ignoreEmpty ?? true
      }],
      validator: DbLookupValidator,
    });
  };
}