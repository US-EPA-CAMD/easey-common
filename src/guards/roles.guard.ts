import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { BadRequestException } from "@nestjs/common/exceptions";
import { Reflector } from "@nestjs/core";
import { getManager } from "typeorm";
import { LookupType } from "../enums";
import { ValidatorParams } from "../interfaces";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  returnManager(): any {
    return getManager();
  }

  // Find the corresponding request parameter and check to see if the user has permissions
  handlePathParamValidation(context: ExecutionContext, lookupKey, lookupList) {
    const request = context.switchToHttp().getRequest();
    const params = request.params;

    if (params[lookupKey]) {
      const lookupVal = params[lookupKey];
      return lookupList.includes(lookupVal);
    } else {
      console.warn("Are you sure you entered the request parameter correctly?");
      throw new BadRequestException(
        "Lookup parameter does not exist in request"
      );
    }
  }

  // Recursively drills into a nested object and makes sure all properties are included in the lookup list
  private recurseBody(data, pathChunks, step, lookupList) {
    if (step === pathChunks.length - 1) {
      //Finish recursion base case
      return lookupList.includes(data[pathChunks[step]]);
    }

    if (pathChunks[step] === "*") {
      for (const newChunk of data) {
        if (
          this.recurseBody(newChunk, pathChunks, step + 1, lookupList) === false
        ) {
          return false;
        }
      }

      return true;
    } else {
      return this.recurseBody(
        data[pathChunks[step]],
        pathChunks,
        step + 1,
        lookupList
      );
    }
  }

  // Recursively iterate the request body object based on (.) notation to find desired property and check if the user has permissions
  async handleBodyParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList
  ) {
    const lookupKeyParts = lookupKey.split(".");
    let dataChunk = context.switchToHttp().getRequest().body;

    return this.recurseBody(dataChunk, lookupKeyParts, 0, lookupList);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const permissions = request.user.permissionSet;

    const requiredRole = this.reflector.get<string>(
      "requiredRole",
      context.getHandler()
    );
    const lookupType = this.reflector.get<number>(
      "lookupType",
      context.getHandler()
    );
    const params = this.reflector.get<ValidatorParams>(
      "params",
      context.getHandler()
    );

    const facilitiesWithRole = permissions
      .filter((f) => f.permissions.includes(requiredRole))
      .map((m) => m.id);

    let lookupDataList;
    switch (lookupType) {
      case LookupType.Location:
        const locations = await this.returnManager().query(
          "SELECT camdecmpswks.get_facility_locations($1)",
          [facilitiesWithRole]
        );
        lookupDataList = locations.map((o) => o["get_facility_locations"]);
        request.allowedLocations = lookupDataList;
        break;
      case LookupType.MonitorPlan:
        const plans = await this.returnManager().query(
          "SELECT camdecmpswks.get_facility_plans($1)",
          [facilitiesWithRole]
        );
        lookupDataList = plans.map((o) => o["get_facility_plans"]);
        request.allowedPlans = lookupDataList;
        break;
      case LookupType.Facility:
        lookupDataList = facilitiesWithRole;
        request.allowedOrisCodes = lookupDataList;
        break;
    }

    if (params.pathParam) {
      return this.handlePathParamValidation(
        context,
        params.pathParam,
        lookupDataList
      );
    } else {
      return this.handleBodyParamValidation(
        context,
        params.bodyParam,
        lookupDataList
      );
    }
  }
}
