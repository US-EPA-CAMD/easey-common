import { CheckCatalogService } from "./check-catalog.service";

const viewData = [
  {
    checkTypeCode: "TEST",
    checkNumber: 1,
    resultCode: "A",
    resultMessage: "[fieldname] [key]",
  },
  {
    checkTypeCode: "TEST",
    checkNumber: 2,
    resultCode: "A",
    resultMessage: "[Stack Pipe ID]",
  },
  {
    checkTypeCode: "TEST",
    checkNumber: 3,
    resultCode: "A",
    resultMessage: "[ORIS Code]",
  },
  {
    checkTypeCode: "TEST",
    checkNumber: 4,
    resultCode: "A",
    resultMessage: "[SystemID]",
  },
  {
    checkTypeCode: "TEST",
    checkNumber: 5,
    resultCode: "A",
    resultMessage: "[Stack/Pipe ID]",
  },
  {
    checkTypeCode: "TEST",
    checkNumber: 6,
    resultCode: "A",
    resultMessage: "[UNADJUSTED_HRLY_VALUE]",
  },
  {
    checkTypeCode: "TEST",
    checkNumber: 7,
    resultCode: "A",
    resultMessage: "[SAMPLE-METHOD]",
  },
  {
    checkTypeCode: "TEST",
    checkNumber: 8,
    resultCode: "A",
    resultMessage: "[Children]",
  },
];

describe("CheckCatalogService", () => {

  beforeEach(async () => {
    jest
      .spyOn(CheckCatalogService, 'getViewData')
      .mockResolvedValue(viewData);
    await CheckCatalogService.load("view");
  });

  it("[fieldname] [key]", async () => {
    const key = "myKey";
    const fieldname = "myField";
    const checkTypeCode = "TEST-1-A";
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      key: key,
      fieldname: fieldname,
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${fieldname}] [${key}]`
    );
  });

  it("[Stack Pipe ID]", async () => {
    const stackPipeId = "1234";
    const checkTypeCode = "TEST-2-A";
    await CheckCatalogService.load("view");
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      stackPipeId: stackPipeId
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${stackPipeId}]`
    );
  });

  it("[ORIS Code]", async () => {
    const orisCode = "1234";
    const checkTypeCode = "TEST-3-A";
    await CheckCatalogService.load("view");
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      orisCode: orisCode
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${orisCode}]`
    );
  });

  it("[SystemID]", async () => {
    const systemId = "1234";
    const checkTypeCode = "TEST-4-A";
    await CheckCatalogService.load("view");
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      systemID: systemId
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${systemId}]`
    );
  });

  it("[Stack/Pipe ID]", async () => {
    const stackPipeId = "1234";
    const checkTypeCode = "TEST-5-A";
    await CheckCatalogService.load("view");
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      stackPipeId: stackPipeId
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${stackPipeId}]`
    );
  });

  it("[UNADJUSTED_HRLY_VALUE]", async () => {
    const unadjustedHrlyValue = "1234";
    const checkTypeCode = "TEST-6-A";
    await CheckCatalogService.load("view");
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      unadjustedHrlyValue: unadjustedHrlyValue
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${unadjustedHrlyValue}]`
    );
  });

  it("[SAMPLE-METHOD]", async () => {
    const sampleMethod = "1234";
    const checkTypeCode = "TEST-7-A";
    await CheckCatalogService.load("view");
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      sampleMethod: sampleMethod
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${sampleMethod}]`
    );
  });

  it("[Children]", async () => {
    const children = "1234";
    const checkTypeCode = "TEST-8-A";
    await CheckCatalogService.load("view");
    const result = CheckCatalogService.formatResultMessage(checkTypeCode, {
      children: children
    });
    expect(result).toEqual(
      `[${checkTypeCode}] - [${children}]`
    );
  });
})
