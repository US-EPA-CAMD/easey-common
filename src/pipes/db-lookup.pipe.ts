import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindOneOptions } from "typeorm";
import { DbLookupValidator } from '../validators';

/**
 * Database lookup validation decorator
 * @param type - The entity type to validate against
 * @param findOption - Function to generate FindOneOptions or 'primary' for primary key lookup
 * @param validationOptions - Standard class-validator options
 * @param ignoreEmpty - Flag used to control empty values
 */

export function dbLookup(
  type: any,
  findOption: ((validationArguments: ValidationArguments) => FindOneOptions) | "primary",
  validationOptions: ValidationOptions,
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
