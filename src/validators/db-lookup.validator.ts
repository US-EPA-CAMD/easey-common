import { Injectable, BadRequestException } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { EntityManager, IsNull } from 'typeorm';
//import { DbLookupOptions } from '../interfaces';

@Injectable()
@ValidatorConstraint({ name: 'dbLookup', async: true })
export class DbLookupValidator implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: any, args: ValidationArguments) {
    const [{ type, findOption, validateNumeric, ignoreEmpty }] = args.constraints;

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
