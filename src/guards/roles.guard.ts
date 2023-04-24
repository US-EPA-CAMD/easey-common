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

  private checkEnforceCheckout(
    item: string,
    lookupType: LookupType,
    enforceCheckout: boolean,
    checkedOutCriteria: Set<string>
  ): boolean {
    if (enforceCheckout) {
      if (
        lookupType === LookupType.Location ||
        lookupType === LookupType.MonitorPlan
      ) {
        if (!checkedOutCriteria.has(item)) {
          console.log("Location not checked out!");
          return false;
        }
      }
    }

    return true;
  }

  //
  // Find the corresponding request parameter and check to see if the user has permissions
  handlePathParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    lookupType,
    enforceCheckout,
    checkedOutCriteria
  ) {
    const request = context.switchToHttp().getRequest();
    const params = request.params;

    if (params[lookupKey]) {
      const lookupVal = params[lookupKey];

      if (
        this.checkEnforceCheckout(
          lookupVal,
          lookupType,
          enforceCheckout,
          checkedOutCriteria
        )
      ) {
        return lookupList.has(lookupVal);
      }

      return false;
    } else {
      console.warn("Are you sure you entered the request parameter correctly?");
      throw new BadRequestException(
        "Lookup parameter does not exist in request"
      );
    }
  }

  // Recursively drills into a nested object and makes sure all properties are included in the lookup list
  private recurseBody(
    data,
    pathChunks,
    step,
    lookupList,
    lookupType,
    enforceCheckout,
    checkedOutCriteria
  ) {
    if (step === pathChunks.length - 1) {
      if (
        this.checkEnforceCheckout(
          data[pathChunks[step]],
          lookupType,
          enforceCheckout,
          checkedOutCriteria
        )
      ) {
        return lookupList.has(data[pathChunks[step]]);
      }

      return false;
    }

    if (pathChunks[step] === "*") {
      for (const newChunk of data) {
        if (
          this.recurseBody(
            newChunk,
            pathChunks,
            step + 1,
            lookupList,
            lookupType,
            enforceCheckout,
            checkedOutCriteria
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
        lookupType,
        enforceCheckout,
        checkedOutCriteria
      );
    }
  }

  // Recursively iterate the request body object based on (.) notation to find desired property and check if the user has permissions
  async handleBodyParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    lookupType,
    enforceCheckout,
    checkedOutCriteria
  ) {
    const lookupKeyParts = lookupKey.split(".");
    let dataChunk = context.switchToHttp().getRequest().body;

    return this.recurseBody(
      dataChunk,
      lookupKeyParts,
      0,
      lookupList,
      lookupType,
      enforceCheckout,
      checkedOutCriteria
    );
  }

  handleQueryParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    lookupType,
    enforceCheckout,
    checkedOutCriteria,
    isDelimitted = false
  ) {
    const request = context.switchToHttp().getRequest();
    const params = request.query;

    if (params[lookupKey]) {
      const lookupVal = params[lookupKey];
      if (isDelimitted) {
        const pathChunks = lookupVal
          .split("|")
          .map((item: string) => item.trim());

        for (const chunk of pathChunks) {
          if (
            !this.checkEnforceCheckout(
              chunk,
              lookupType,
              enforceCheckout,
              checkedOutCriteria
            )
          ) {
            return false;
          }

          if (!lookupList.has(chunk)) {
            return false;
          }
        }

        return true;
      }

      if (
        this.checkEnforceCheckout(
          lookupVal,
          lookupType,
          enforceCheckout,
          checkedOutCriteria
        )
      ) {
        return lookupList.has(lookupVal);
      }

      return false;
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
        request.user.facilities === null
      ) {
        request.allowedLocations = null;
        request.allowedPlans = null;
        request.allowedOrisCodes = null;
        return true;
      }
    }

    const facilities = request.user.facilities;
    const lookupType = this.reflector.get<number>(
      "lookupType",
      context.getHandler()
    );

    const params = this.reflector.get<ValidatorParams>(
      "params",
      context.getHandler()
    );

    const facilitiesWithRole = facilities.map((p) => p.orisCode.toString());

    let enforceCheckout = true; //Determine if thise endpoint needs to enforce that all records are also currently checked out
    if (this.configService.get<boolean>("app.enableRoleGuardCheckoutCheck")) {
      if (
        params.enforceCheckout !== null &&
        params.enforceCheckout !== undefined &&
        !params.enforceCheckout
      ) {
        enforceCheckout = false;
      }
    } else {
      enforceCheckout = false;
    }

    let checkedOutCriteria;
    if (enforceCheckout) {
      if (lookupType === LookupType.MonitorPlan) {
        //Pull back all of our checked out monitor plans
        checkedOutCriteria = await this.returnManager().query(
          "SELECT mon_plan_id FROM camdecmpswks.user_check_out WHERE checked_out_by = $1",
          [request.user.userId]
        );
        checkedOutCriteria = new Set(
          checkedOutCriteria.map((c) => c["mon_plan_id"])
        );
      } else if (lookupType === LookupType.Location) {
        checkedOutCriteria = await this.returnManager().query(
          `SELECT mon_loc_id FROM camdecmpswks.user_check_out 
         JOIN camdecmpswks.monitor_plan_location USING (mon_plan_id) 
         WHERE checked_out_by = $1`,
          [request.user.userId]
        );
        checkedOutCriteria = new Set(
          checkedOutCriteria.map((c) => c["mon_loc_id"])
        );
      }
    }

    // Pull the list of data that the user has access to based on their facility list
    let lookupDataList;
    switch (lookupType) {
      case LookupType.Location:
        const locations = await this.returnManager().query(
          "SELECT camdecmpswks.get_facility_locations($1)",
          [facilitiesWithRole]
        );
        lookupDataList = new Set(
          locations.map((o) => o["get_facility_locations"])
        );
        request.allowedLocations = lookupDataList;
        break;
      case LookupType.MonitorPlan:
        const plans = await this.returnManager().query(
          "SELECT camdecmpswks.get_facility_plans($1)",
          [facilitiesWithRole]
        );
        lookupDataList = new Set(plans.map((o) => o["get_facility_plans"]));
        request.allowedPlans = lookupDataList;
        break;
      case LookupType.Facility:
        lookupDataList = new Set(facilitiesWithRole);
        request.allowedOrisCodes = lookupDataList;
        break;
    }

    if (params.importLocationSources) {
      for (const importLocationSource of params.importLocationSources) {
        const paths = importLocationSource.split(".");
        let chunk = context.switchToHttp().getRequest().body;
        const orisCode = chunk["orisCode"];
        for (const pathChunk of paths) {
          // Drill down into each location source
          chunk = chunk[pathChunk];
        }

        for (const locationChunk of chunk) {
          //Perform validation of the data
          let monitorLocations = await this.returnManager().query(
            "SELECT camdecmpswks.get_locations_by_unit_and_stack($1, $2, $3)",
            [orisCode, locationChunk["unitId"], locationChunk["stackPipeId"]]
          );

          if (monitorLocations && monitorLocations.length === 0) {
            // Return false if the query returns no results
            return false;
          }

          monitorLocations = monitorLocations.map(
            (ml) => ml["get_locations_by_unit_and_stack"]
          );

          for (const ml of monitorLocations) {
            if (
              (enforceCheckout && !checkedOutCriteria.has(ml)) ||
              !lookupDataList.has(ml)
            ) {
              return false;
            }
          }
        }
      }

      return true;
    }

    //Determine the validation that needs to get executed. In the case there is none, return true, and use the unpacked list of accesible location / plan / facility data from the decorators
    if (params.pathParam) {
      return this.handlePathParamValidation(
        context,
        params.pathParam,
        lookupDataList,
        lookupType,
        enforceCheckout,
        checkedOutCriteria
      );
    } else if (params.bodyParam) {
      return this.handleBodyParamValidation(
        context,
        params.bodyParam,
        lookupDataList,
        lookupType,
        enforceCheckout,
        checkedOutCriteria
      );
    } else if (params.queryParam) {
      return this.handleQueryParamValidation(
        context,
        params.queryParam,
        lookupDataList,
        lookupType,
        enforceCheckout,
        checkedOutCriteria,
        params.isPipeDelimitted
      );
    } else {
      return true;
    }
  }
}
