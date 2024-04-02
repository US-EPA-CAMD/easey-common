import { ValidationArguments } from "class-validator";
import { FindManyOptions, FindOneOptions } from "typeorm";

export interface DbLookupOptions {
  type: any;
  findOption: (validationArguments: ValidationArguments) => FindOneOptions;
}

export interface IsValidCodeOptions {
  type: any;
  findOption?: (args: ValidationArguments) => FindManyOptions;
}
