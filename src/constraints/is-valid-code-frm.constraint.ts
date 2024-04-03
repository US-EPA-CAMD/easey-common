import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { CheckCatalogService } from "../check-catalog/check-catalog.service";
import { IsValidCodeFrmOptions } from "../interfaces/validator-options.interface";

@Injectable()
@ValidatorConstraint({ name: "isValidCodeFrm", async: true })
export class IsValidCodeFrmConstraint implements ValidatorConstraintInterface {
  constructor(
    private readonly checkCatalogService: CheckCatalogService,
    private readonly entityManager: EntityManager
  ) {}

  async validate(value: any, args: ValidationArguments) {
    const { type, findOption }: IsValidCodeFrmOptions = args.constraints[0];
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

  defaultMessage(args: ValidationArguments): string {
    const { code, formatValues }: IsValidCodeFrmOptions = args.constraints[0];
    return this.checkCatalogService.formatResultMessage(
      code,
      typeof formatValues === "function" ? formatValues(args) : formatValues
    );
  }
}
