import { Injectable, BadRequestException } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { EntityManager, IsNull, BaseEntity } from 'typeorm';
import { DbLookupOptions } from '../interfaces';

/**
 * Validator for database lookup validation
 * Handles validation of values against database entities
 */

@Injectable()
@ValidatorConstraint({ name: 'dbLookup', async: true })
export class DbLookupValidator implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  /**
   * Validates the input value against database records
   * @param value - The value to validate
   * @param args - Validation arguments containing constraints and property information
   */

  async validate(value: any, args: ValidationArguments) {
    // Correctly handle the constraints array
    const constraints = args.constraints[0] as DbLookupOptions<BaseEntity>;
    const { type, findOption, validateNumeric, ignoreEmpty } = constraints;

    if (!value && ignoreEmpty) {
      return true;
    }

    if (validateNumeric && value !== null) {
      if (isNaN(Number(value)) || !String(value).match(/^\d+$/)) {
        throw new BadRequestException(
          `${args.property} must be a valid numeric value`
        );
      }
    }

    try {
      const options = findOption === 'primary'
        ? {
            where: {
              [this.entityManager.getRepository(type).metadata
                .primaryColumns[0].propertyName]: value ?? IsNull(),
            },
          }
        : findOption?.({ ...args, value }) ?? {
            where: { [args.property]: value ?? IsNull() },
          };

      const found = await this.entityManager.findOne(type, options);
      return !!found;
    } catch (error) {
      throw new BadRequestException(
        `Validation failed for ${args.property}: ${error.message}`
      );
    }
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} with value '${args.value}' was not found in the database`;
  }
}
