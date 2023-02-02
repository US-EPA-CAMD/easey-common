import { SetMetadata, applyDecorators, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard, RolesGuard } from "../guards";
import { ValidatorParams } from "../interfaces";

export function RoleGuard(
  params: ValidatorParams,
  lookupType: number,
  requiredRole: string
) {
  return applyDecorators(
    SetMetadata("params", params),
    SetMetadata("lookupType", lookupType),
    SetMetadata("requiredRole", requiredRole),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth("Token")
  );
}
