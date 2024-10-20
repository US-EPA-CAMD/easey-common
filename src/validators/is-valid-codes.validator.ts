import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable, BadRequestException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { IsValidCodesOptions } from '../interfaces';

@Injectable()
@ValidatorConstraint({ name: 'isValidCodes', async: true })
export class IsValidCodesValidator implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: string | string[], args: ValidationArguments) {
    const { type, findOption }: IsValidCodesOptions = args.constraints[0];

    if (value) {
      // Split the value if it includes commas or pipes
      if (typeof value === 'string') {
        if (value.includes(',')) {
          value = value.split(',');
        } else if (value.includes('|')) {
          value = value.split('|');
        } else {
          value = [value]; // Wrap single string in an array
        }
      }

      // Filter out empty strings from the values array
      value = value.filter((v) => v !== '');

      // Validate that input values are not empty or null
      if (value.length === 0) {
        throw new BadRequestException('No valid codes were provided.');
      }

      try {
        // Pass args correctly with value and other necessary properties for ValidationArguments
        const found = await this.entityManager.find(
          type,
          findOption({ ...args, value }) // args now includes all ValidationArguments
        );

        // Return true only if the number of found records matches the input values
        return found.length === value.length;
      } catch (error) {
        // Log the error and throw a meaningful exception
        console.error('Error during code validation:', error);
        throw new BadRequestException('Internal server error during code validation.');
      }
    }

    return true; // Return true if no value is provided (allowing optional validation)
  }

  // Default error message for validation failure
defaultMessage(): string {
    return `Validation failed: One or more of the provided codes are invalid.`;
  }
}

