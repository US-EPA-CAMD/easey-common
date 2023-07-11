import { HttpStatus, ValidationPipe } from "@nestjs/common";
import iterate from "iterare";
import { EaseyException } from "../exceptions";

export class EaseyValidationPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      exceptionFactory: (validationErrors) => {
        const errors = iterate(validationErrors)
          .map((error) => this.mapChildrenToValidationErrors(error))
          .flatten()
          .filter((item) => !!item.constraints)
          .map((item) => Object.values(item.constraints))
          .flatten()
          .toArray();

        throw new EaseyException(
          new Error(`\n${errors.join("\n")}\n`),
          HttpStatus.BAD_REQUEST,
          { validatorMessages: errors }
        );
      },
    });
  }
}
