import { ValidationArguments } from "class-validator";
import {
  BaseEntity,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
} from "typeorm";

export interface DbLookupOptions<T extends BaseEntity> {
  ignoreEmpty?: boolean;
  findOption?: (validationArguments: ValidationArguments) => FindOneOptions<T>;
  type: EntityTarget<T>;
}

export interface IsValidCodesOptions {
  findOption?: (validationArguments: ValidationArguments) => FindManyOptions;
  type: EntityTarget<unknown>;
}
