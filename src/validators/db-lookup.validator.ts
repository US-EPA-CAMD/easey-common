import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseEntity, EntityManager, IsNull } from 'typeorm';
import { DbLookupOptions } from '../interfaces';

@Injectable()
@ValidatorConstraint({ name: 'dbLookup', async: true })
export class DbLookupValidator implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: any, args: ValidationArguments) {
    const {
      ignoreEmpty = true,
      type,
      findOption,
      validateNumeric = false,
    }: DbLookupOptions<BaseEntity> = args.constraints[0];

    if (value || !ignoreEmpty) {
      if (validateNumeric && isNaN(value)) {
        throw new BadRequestException(
          `Invalid input: "${value}" must be a valid numeric value for this field.`
        );
      }

      const options =
        findOption === 'primary'
          ? {
              where: {
                [this.entityManager.getRepository(type).metadata
                  .primaryColumns[0].propertyName]: value ?? IsNull(),
              },
            }
          : findOption?.({ ...args, value }) ?? {
              where: {
                [args.property]: value ?? IsNull(),
              },
            };

      try {
        const found = await this.entityManager.findOne(type, options);
        return !!found;
      } catch (error) {
        console.error('Error during database lookup:', error);
        throw new BadRequestException(
          'Database validation failed. Please try again or contact support if the issue persists.'
        );
      }
    }

    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    return `Validation failed: Record with value "${args.value}" was not found in the database.`;
  }
}
