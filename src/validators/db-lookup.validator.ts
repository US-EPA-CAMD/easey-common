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
      const options =
        findOption === "primary"
          ? // Find by the entity's primary key.
            {
              where: {
                [this.entityManager.getRepository(type).metadata
                  .primaryColumns[0].propertyName]: value ?? IsNull(),
              },
            }
          : // Use the provided find options.
            findOption?.(args) ?? {
              // Default to finding by the property with the same name.
              where: {
                [args.property]: value ?? IsNull(),
              },
            };
      const found = await this.entityManager.findOne(type, options);
      return found != null;
    }
    return true;
  }
}
