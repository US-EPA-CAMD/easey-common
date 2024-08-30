import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { BaseEntity, EntityManager, IsNull } from "typeorm";
import { DbLookupOptions } from "../interfaces/validator-options.interface";

@Injectable()
@ValidatorConstraint({ name: "dbLookup", async: true })
export class DbLookupValidator implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: any, args: ValidationArguments) {
    const {
      ignoreEmpty = true,
      type,
      findOption,
    }: DbLookupOptions<BaseEntity> = args.constraints[0];

    if (value || !ignoreEmpty) {
      const found = await this.entityManager.findOne(
        type,
        findOption?.(args) ?? {
          where: {
            [args.property]: value ?? IsNull(),
          },
        }
      );
      return found != null;
    }
    return true;
  }
}
