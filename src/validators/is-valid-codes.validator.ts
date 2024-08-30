import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { IsValidCodesOptions } from "../interfaces/validator-options.interface";

@Injectable()
@ValidatorConstraint({ name: "isValidCodes", async: true })
export class IsValidCodesValidator implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: string | string[], args: ValidationArguments) {
    const { type, findOption }: IsValidCodesOptions = args.constraints[0];
    if (value) {
      if (typeof value === "string") {
        if (value.includes(",")) {
          value = value.split(",");
        } else if (value.includes("|")) {
          value = value.split("|");
        } else {
          value = [value];
        }
      }
      value = value.filter((v) => v !== "");
      const found = await this.entityManager.find(type, findOption(args));
      return found.length === value.length;
    }
    return true;
  }
}
