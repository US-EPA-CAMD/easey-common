import { SetMetadata, applyDecorators, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard, RolesGuard } from "../guards";
import { ValidatorParams } from "../interfaces";

export function RoleGuard(params: ValidatorParams, lookupType: number) {
  return applyDecorators(
    SetMetadata("params", params),
    SetMetadata("lookupType", lookupType),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth("Token")
  );
}
