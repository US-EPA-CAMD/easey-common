import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { DbLookupOptions } from "../interfaces/validator-options.interface";

@Injectable()
@ValidatorConstraint({ name: "dbLookup", async: true })
export class DbLookupValidator implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: any, args: ValidationArguments) {
    const { type, findOption }: DbLookupOptions = args.constraints[0];
    if (value) {
      const found = await this.entityManager.findOne(type, findOption(args));
      return found != null;
    }
    return true;
  }
}
