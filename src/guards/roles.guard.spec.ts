import { TestingModule, Test } from "@nestjs/testing";
import { RolesGuard } from "./roles.guard";
import { Reflector } from "@nestjs/core";
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext } from "@nestjs/common";
import { LookupType } from "../enums";
import { ValidatorParams } from "src/interfaces";
import { ConfigService } from "@nestjs/config";

describe("RolesGuard", () => {
  let guard: RolesGuard;
  let reflector;

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        RolesGuard,
        {
          provide: Reflector,
          useValue: {
            constructor: jest.fn(),
            get: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useFactory: () => {
            return { get: jest.fn().mockReturnValue("true") };
          },
        },
      ],
    }).compile();

    reflector = module.get(Reflector);
    guard = module.get(RolesGuard);
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });

  it("should execute without error and call the handlePathParamFunction when path param is present", async () => {
    const mockCall = jest.fn();

    jest.spyOn(guard, "returnManager").mockReturnValue({
      query: jest.fn().mockResolvedValue([
        {
          get_facility_locations: "1",
        },
        {
          get_facility_locations: "2",
        },
        {
          get_facility_locations: "3",
        },
      ]),
    });

    jest.spyOn(reflector, "get").mockImplementation((a: string) => {
      switch (a) {
        case "requiredRole":
          return "DSMP";
        case "lookupType":
          return LookupType.Location;
        case "params":
          return {
            pathParam: "locId",
          } as ValidatorParams;
      }
    });

    jest.spyOn(guard, "handlePathParamValidation").mockImplementation(mockCall);

    const context = createMock<ExecutionContext>({
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          user: {
            facilities: [
              {
                orisCode: 3,
                permissions: ["DSMP"],
              },
            ],
          },
        }),
      }),
    });

    await guard.canActivate(context);

    expect(mockCall).toHaveBeenCalled();
  });

  it("should execute without error and call the handleBodyParamValidation when path param is present", async () => {
    const mockCall = jest.fn();

    jest.spyOn(guard, "returnManager").mockReturnValue({
      query: jest.fn().mockResolvedValue([
        {
          get_facility_locations: "1",
        },
        {
          get_facility_locations: "2",
        },
        {
          get_facility_locations: "3",
        },
      ]),
    });

    jest.spyOn(reflector, "get").mockImplementation((a: string) => {
      switch (a) {
        case "requiredRole":
          return "DSMP";
        case "lookupType":
          return LookupType.MonitorPlan;
        case "params":
          return {
            bodyParam: "locId",
          } as ValidatorParams;
      }
    });

    jest.spyOn(guard, "handleBodyParamValidation").mockImplementation(mockCall);

    const context = createMock<ExecutionContext>({
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          user: {
            facilities: [
              {
                orisCode: 3,
                permissions: ["DSMP"],
              },
            ],
          },
        }),
      }),
    });

    await guard.canActivate(context);

    expect(mockCall).toHaveBeenCalled();
  });

  it("execute the handlePathParamValidation with existing property", async () => {
    const context = createMock<ExecutionContext>({
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          params: { locId: "5" },
        }),
      }),
    });

    expect(
      guard.handlePathParamValidation(
        context,
        "locId",
        new Set(["5"]),
        false,
        false,
        []
      )
    ).toBe(true);
  });

  it("execute the handleQueryParamValidation with existing property and checkedOutCriteria set", async () => {
    const context = createMock<ExecutionContext>({
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          query: { locId: "5" },
        }),
      }),
    });

    expect(
      guard.handleQueryParamValidation(
        context,
        "locId",
        new Set(["5"]),
        true,
        new Set(["5"]),
        []
      )
    ).toBe(true);
  });

  it("execute the handleQueryParamValidation with delimitting", async () => {
    const context = createMock<ExecutionContext>({
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          query: { locId: "5|6" },
        }),
      }),
    });

    expect(
      guard.handleQueryParamValidation(
        context,
        "locId",
        new Set(["5", "6"]),
        false,
        false,
        [],
        true
      )
    ).toBe(true);
  });

  it("execute the handleBodyParamValidation with nested dto object", async () => {
    const context = createMock<ExecutionContext>({
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          body: {
            locations: [
              {
                innerLocation: [
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                ],
              },
              {
                innerLocation: [
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                ],
              },
              {
                innerLocation: [
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                ],
              },
            ],
          },
        }),
      }),
    });

    const result = await guard.handleBodyParamValidation(
      context,
      "locations.*.innerLocation.*.val",
      new Set(["5"]),
      false,
      false,
      []
    );

    expect(result).toBe(true);
  });

  it("execute the handleBodyParamValidation with nested dto object and fail", async () => {
    const context = createMock<ExecutionContext>({
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          body: {
            locations: [
              {
                innerLocation: [
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                ],
              },
              {
                innerLocation: [
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                  {
                    val: "4",
                  },
                ],
              },
              {
                innerLocation: [
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                  {
                    val: "5",
                  },
                ],
              },
            ],
          },
        }),
      }),
    });

    const result = await guard.handleBodyParamValidation(
      context,
      "locations.*.innerLocation.*.val",
      new Set(["5"]),
      false,
      false,
      []
    );

    expect(result).toBe(false);
  });
});