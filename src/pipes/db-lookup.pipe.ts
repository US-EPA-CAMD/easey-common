import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { FindOneOptions } from "typeorm";
import { DbLookupValidator } from '../validators';

export function DbLookup(
  type: any,
  findOption?:
    | ((validationArguments: ValidationArguments) => FindOneOptions)
    | "primary"
    | {
        validateNumeric?: boolean;
        ignoreEmpty?: boolean;
        findOption?: ((validationArguments: ValidationArguments) => FindOneOptions) | "primary";
      },
  validationOptions?: ValidationOptions,
  ignoreEmpty = true
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "dbLookup",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [
        typeof findOption === "object" && !Array.isArray(findOption)
          ? {
              ignoreEmpty: findOption.ignoreEmpty ?? ignoreEmpty,
              validateNumeric: findOption.validateNumeric ?? false,
              type,
              findOption: findOption.findOption,
            }
          : {
              ignoreEmpty,
              validateNumeric: false,
              type,
              findOption,
            },
      ],
      validator: DbLookupValidator,
    });
  };
}
