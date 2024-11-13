import { ValidationArguments } from "class-validator";
import { BaseEntity, EntityTarget, FindManyOptions, FindOneOptions } from "typeorm";

/**
 * Complete options interface for database lookup validation
 * Used internally by the validator
 */

export interface DbLookupOptions<T extends BaseEntity> {
  ignoreEmpty?: boolean;
  validateNumeric?: boolean;
  findOption?: ((validationArguments: ValidationArguments) => FindOneOptions<T>) | "primary";
  type: EntityTarget<T>;
}

/**
 * Options for validating multiple codes
 */
export interface IsValidCodesOptions {
  findOption?: (validationArguments: ValidationArguments) => FindManyOptions;
  type: EntityTarget<unknown>;
}