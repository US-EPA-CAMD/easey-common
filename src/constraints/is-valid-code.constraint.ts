import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { IsValidCodeOptions } from "../interfaces/validator-options.interface";

@Injectable()
@ValidatorConstraint({ name: "isValidCode", async: true })
export class IsValidCodeConstraint implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: any, args: ValidationArguments) {
    const { type, findOption }: IsValidCodeOptions = args.constraints[0];
    if (value) {
      let found;
      if (findOption) {
        found = await this.entityManager.findOne(type, findOption(args));
      } else {
        found = await this.entityManager.findOne(type, value);
      }
      return found != null;
    }
    return true;
  }
}
