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
    }: DbLookupOptions<BaseEntity> = args.constraints[0];

    // Handle empty or null values
    if (value || !ignoreEmpty) {
      // Additional check for non-numeric input (assuming IDs are numeric)
      if (isNaN(value)) {
        throw new BadRequestException(`Invalid input: "${value}" is not a valid numeric identifier.`);
      }

      const options =
        findOption === 'primary'
          ? {
              // Find by the entity's primary key
              where: {
                [this.entityManager.getRepository(type).metadata
                  .primaryColumns[0].propertyName]: value ?? IsNull(),
              },
            }
          : // Use the provided find options
            findOption?.({ ...args, value }) ?? {
              // Default to finding by the property with the same name as the value
              where: {
                [args.property]: value ?? IsNull(),
              },
            };

      try {
        const found = await this.entityManager.findOne(type, options);

        if (!found) {
          // If no record is found, throw an exception with a clear message
          return false;
        }

        return true; // Return true if the record is found
      } catch (error) {
        // Log the error and throw an internal server exception
        console.error('Error during database lookup:', error);

        // Directly rethrowing the error instead of throwing a new one if it's meaningful
        throw new BadRequestException('Internal server error during database validation.');
      }
    }

    return true; // Default return if ignoreEmpty is true and value is empty
  }

  // Default error message (As/If needed)
  defaultMessage(args: ValidationArguments): string {
    return `Validation failed: Record with ID "${args.value}" was not found in the database.`;
  }
}
