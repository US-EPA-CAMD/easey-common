import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable, BadRequestException, Optional } from '@nestjs/common';
import { BaseEntity, EntityManager, IsNull } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DbLookupOptions } from '../interfaces';

@Injectable()
@ValidatorConstraint({ name: 'dbLookup', async: true })
export class DbLookupValidator implements ValidatorConstraintInterface {
  constructor(
    private readonly entityManager: EntityManager,
    @Optional() private readonly configService?: ConfigService,
  ) {}

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

      try {
        const options = findOption === 'primary'
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

        const found = await this.entityManager.findOne(type, options);
        return !!found;
      } catch (error) {
        if (process.env.NODE_ENV !== 'test') {
          console.error('Database lookup validation failed:', error);
        }
        throw new BadRequestException(
          'Validation failed. Please verify your input and try again.'
        );
      }
    }
    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    return `Validation failed: Record with value "${args.value}" was not found in the database.`;
  }
}
