import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { BadRequestException } from "@nestjs/common/exceptions";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { parseBool } from "../utilities";
import { getManager } from "typeorm";
import { LookupType } from "../enums";
import { ValidatorParams } from "../interfaces";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService
  ) {}

  // Need this to mock the getManager without mocking all of typeorm
  returnManager(): any {
    return getManager();
  }
  //
  // Find the corresponding request parameter and check to see if the user has permissions
  handlePathParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    toParseInt
  ) {
    const request = context.switchToHttp().getRequest();
    const params = request.params;

    if (params[lookupKey]) {
      const lookupVal = params[lookupKey];

      if (toParseInt) {
        return lookupList.includes(parseInt(lookupVal));
      }

      return lookupList.includes(lookupVal);
    } else {
      console.warn("Are you sure you entered the request parameter correctly?");
      throw new BadRequestException(
        "Lookup parameter does not exist in request"
      );
    }
  }

  // Recursively drills into a nested object and makes sure all properties are included in the lookup list
  private recurseBody(data, pathChunks, step, lookupList, toParseInt) {
    if (step === pathChunks.length - 1) {
      //Finish recursion base case
      if (toParseInt) {
        return lookupList.includes(parseInt(data[pathChunks[step]]));
      }

      return lookupList.includes(data[pathChunks[step]]);
    }

    if (pathChunks[step] === "*") {
      for (const newChunk of data) {
        if (
          this.recurseBody(
            newChunk,
            pathChunks,
            step + 1,
            lookupList,
            toParseInt
          ) === false
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
        lookupList,
        toParseInt
      );
    }
  }

  // Recursively iterate the request body object based on (.) notation to find desired property and check if the user has permissions
  async handleBodyParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    toParseInt
  ) {
    const lookupKeyParts = lookupKey.split(".");
    let dataChunk = context.switchToHttp().getRequest().body;

    return this.recurseBody(
      dataChunk,
      lookupKeyParts,
      0,
      lookupList,
      toParseInt
    );
  }

  handleQueryParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    toParseInt,
    isDelimitted = false
  ) {
    const request = context.switchToHttp().getRequest();
    const params = request.query;

    if (params[lookupKey]) {
      const lookupVal = params[lookupKey];
      if (isDelimitted) {
        const pathChunks = lookupVal
          .split("|")
          .map((item: string) =>
            toParseInt ? parseInt(item.trim()) : item.trim()
          );

        for (const chunk of pathChunks) {
          if (!lookupList.includes(chunk)) {
            return false;
          }
        }

        return true;
      }

      if (toParseInt) {
        return lookupList.includes(parseInt(lookupVal));
      }

      return lookupList.includes(lookupVal);
    } else {
      console.warn("Are you sure you entered the request parameter correctly?");
      throw new BadRequestException(
        "Lookup parameter does not exist in request"
      );
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (this.configService.get<string>("app.env") !== "production") {
      // Allow enable or disable of the guard but still set the allowed decorators
      if (
        !parseBool(this.configService.get("app.enableRoleGuard")) ||
        request.user.permissionSet === null
      ) {
        request.allowedLocations = null;
        request.allowedPlans = null;
        request.allowedOrisCodes = null;
        return true;
      }
    }

    const permissions = request.user.permissionSet;
    const lookupType = this.reflector.get<number>(
      "lookupType",
      context.getHandler()
    );

    const params = this.reflector.get<ValidatorParams>(
      "params",
      context.getHandler()
    );

    const facilitiesWithRole = permissions.map((p) => p.id);

    let toParseInt = false;

    // Pull the list of data that the user has access to based on their facility list
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
        toParseInt = true;
        lookupDataList = facilitiesWithRole;
        request.allowedOrisCodes = lookupDataList;
        break;
    }

    //Determine the validation that needs to get executed. In the case there is none, return true, and use the unpacked list of accesible location / plan / facility data from the decorators
    if (params.pathParam) {
      return this.handlePathParamValidation(
        context,
        params.pathParam,
        lookupDataList,
        toParseInt
      );
    } else if (params.bodyParam) {
      return this.handleBodyParamValidation(
        context,
        params.bodyParam,
        lookupDataList,
        toParseInt
      );
    } else if (params.queryParam) {
      return this.handleQueryParamValidation(
        context,
        params.queryParam,
        lookupDataList,
        toParseInt,
        params.isPipeDelimitted
      );
    } else {
      return true;
    }
  }
}
