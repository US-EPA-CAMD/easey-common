import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from "@nestjs/common";
import { BadRequestException } from "@nestjs/common/exceptions";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { parseBool } from "../utilities";
import { getManager } from "typeorm";
import { LookupType } from "../enums";
import { UserPermissionSet, ValidatorParams } from "../interfaces";
import { EaseyException } from "../exceptions";

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

  private async checkNotEvalOrSubmitted(
    item: string,
    lookupType: LookupType,
    enforceEvalSubmit: boolean
  ): Promise<boolean> {
    if (!enforceEvalSubmit) {
      return true;
    }

    let monPlanIds = [item]; // Default assumption is that this is a monPlanId
    if (lookupType === LookupType.Location) {
      const data = await this.returnManager().query(
        `SELECT mon_plan_id 
         FROM CAMDECMPSWKS.monitor_plan_location
         WHERE mon_loc_id = $1`,
        [item]
      );

      monPlanIds = data.map((d) => d.mon_plan_id);
    } else if (lookupType === LookupType.Facility) {
      return true;
    }

    const evalRecordsInProgress = await this.returnManager().query(
      `SELECT * FROM CAMDECMPSAUX.evaluation_set es
      JOIN CAMDECMPSAUX.evaluation_queue eq USING(evaluation_set_id)
      WHERE mon_plan_id = ANY($1) AND status_cd NOT IN ('COMPLETE', 'ERROR');
      `,
      [monPlanIds]
    );

    const submissionRecordsInProgress = await this.returnManager().query(
      `SELECT * FROM CAMDECMPSAUX.submission_set
       WHERE mon_plan_id = ANY($1) AND status_cd NOT IN ('COMPLETE', 'ERROR');
      `,
      [monPlanIds]
    );

    if (
      (evalRecordsInProgress && evalRecordsInProgress.length > 0) ||
      (submissionRecordsInProgress && submissionRecordsInProgress.length > 0)
    ) {
      throw new EaseyException(
        new Error(
          "This location is currently being evaluated or submitted. Please try again after it is complete"
        ),
        HttpStatus.BAD_REQUEST
      );
    }
    return true;
  }

  // Find the corresponding request parameter and check to see if the user has permissions
  async handlePathParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    lookupType,
    enforceCheckout,
    checkedOutCriteria,
    enforceEvalSubmitCheck
  ) {
    const request = context.switchToHttp().getRequest();
    const params = request.params;

    if (params[lookupKey]) {
      const lookupVal = params[lookupKey];

      if (
        (await this.checkNotEvalOrSubmitted(
          lookupVal,
          lookupType,
          enforceEvalSubmitCheck
        )) &&
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
  private async recurseBody(
    data,
    pathChunks,
    step,
    lookupList,
    lookupType,
    enforceCheckout,
    checkedOutCriteria,
    enforceEvalSubmitCheck
  ) {
    if (step === pathChunks.length - 1) {
      if (
        (await this.checkNotEvalOrSubmitted(
          data[pathChunks[step]],
          lookupType,
          enforceEvalSubmitCheck
        )) &&
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
          (await this.recurseBody(
            newChunk,
            pathChunks,
            step + 1,
            lookupList,
            lookupType,
            enforceCheckout,
            checkedOutCriteria,
            enforceEvalSubmitCheck
          )) === false
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
        checkedOutCriteria,
        enforceEvalSubmitCheck
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
    checkedOutCriteria,
    enforceEvalSubmitCheck
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
      checkedOutCriteria,
      enforceEvalSubmitCheck
    );
  }

  async handleQueryParamValidation(
    context: ExecutionContext,
    lookupKey,
    lookupList,
    lookupType,
    enforceCheckout,
    checkedOutCriteria,
    enforceEvalSubmitCheck,
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
            !(await this.checkNotEvalOrSubmitted(
              chunk,
              lookupType,
              enforceEvalSubmitCheck
            )) ||
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
        (await this.checkNotEvalOrSubmitted(
          lookupVal,
          lookupType,
          enforceEvalSubmitCheck
        )) &&
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

    const lookupType = this.reflector.get<number>(
      "lookupType",
      context.getHandler()
    );

    const params = this.reflector.get<ValidatorParams>(
      "params",
      context.getHandler()
    );

    // Check a user's role, and determine if they can access a resource
    const roles = request.user.roles ?? [];
    if (params.requiredRoles) {
      if (
        params.requiredRoles.includes("ECMPS Admin") &&
        roles.includes("ECMPS Admin")
      ) {
        return true; // In the case the user has the required ECMPS admin role, let them through without performing other checks
      }

      let containsARole = false;
      for (const requiredRole of params.requiredRoles) {
        if (roles.includes(requiredRole)) {
          containsARole = true;
          break;
        }
      }

      if (!containsARole) {
        return false;
      }
    }

    // Check a users permissions for a facility and see if they can edit / submit a facility
    const facilities: UserPermissionSet[] = request.user.facilities;
    const facilitiesWithRole = facilities
      .filter((f) => {
        // An empty array is returned from the permissions API if the user's only role is "Preparer": this should be interpreted to mean that they can perform any "preparer" activities for their list of facilities.
        if (roles.length === 1 && roles[0] === "Preparer") return true;
        if (!params.permissionsForFacility) return true;
        for (const permission of params.permissionsForFacility) {
          if (f.permissions.includes(permission)) {
            return true;
          }
        }
        return false;
      })
      .map((p) => p.orisCode.toString());

    let enforceCheckout = true; // Determine if thise endpoint needs to enforce that all records are also currently checked out
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

    // Determine if location is checked out
    let checkedOutCriteria;
    if (enforceCheckout) {
      if (lookupType === LookupType.MonitorPlan) {
        // Pull back all of our checked out monitor plans
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

    let enforceEvalSubmit = true;
    if (
      params.enforceEvalSubmitCheck !== null &&
      params.enforceEvalSubmitCheck !== undefined
    ) {
      enforceEvalSubmit = params.enforceEvalSubmitCheck;
    }

    if (params.importLocationSources) {
      for (const importLocationSource of params.importLocationSources) {
        const paths = importLocationSource.split(".");
        let chunk = context.switchToHttp().getRequest().body;
        const orisCode = chunk["orisCode"];

        let foundChunk = true;
        for (const pathChunk of paths) {
          // Drill down into each location source
          if (chunk[pathChunk]) {
            chunk = chunk[pathChunk];
          } else {
            foundChunk = false;
          }
        }

        if (foundChunk && chunk.length > 0) {
          const unitSet = new Set();
          const stackPipeSet = new Set();

          for (const locationChunk of chunk) {
            // Perform validation of the data
            unitSet.add(locationChunk["unitId"]);
            stackPipeSet.add(locationChunk["stackPipeId"]);
          }

          let monitorLocations = await this.returnManager().query(
            "SELECT camdecmpswks.get_locations_by_unit_and_stack($1, $2, $3)",
            [orisCode, Array.from(unitSet), Array.from(stackPipeSet)]
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
              !lookupDataList.has(ml) ||
              !(await this.checkNotEvalOrSubmitted(
                ml,
                LookupType.Location,
                enforceEvalSubmit
              ))
            ) {
              return false;
            }
          }
        }
      }

      return true;
    }

    // Determine the validation that needs to get executed. In the case there is none, return true, and use the unpacked list of accesible location / plan / facility data from the decorators
    if (params.pathParam) {
      return this.handlePathParamValidation(
        context,
        params.pathParam,
        lookupDataList,
        lookupType,
        enforceCheckout,
        checkedOutCriteria,
        enforceEvalSubmit
      );
    } else if (params.bodyParam) {
      return this.handleBodyParamValidation(
        context,
        params.bodyParam,
        lookupDataList,
        lookupType,
        enforceCheckout,
        checkedOutCriteria,
        enforceEvalSubmit
      );
    } else if (params.queryParam) {
      return this.handleQueryParamValidation(
        context,
        params.queryParam,
        lookupDataList,
        lookupType,
        enforceCheckout,
        checkedOutCriteria,
        enforceEvalSubmit,
        params.isPipeDelimitted
      );
    } else {
      return true;
    }
  }
}
