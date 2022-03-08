import { ApiConfigService } from "./api-config.service";

export class ErrorMessages {
  public static LessThanOrEqual(parameter: string, value: number) {
    return `${parameter} must be less than or equal to ${value}`;
  }

  public static GreaterThanOrEqual(parameter: string, value: number) {
    return `${parameter} must be greater than or equal to ${value}`;
  }

  public static Between(parameter: string, minVal: number, maxVal: number) {
    return `${parameter} must be between ${minVal} and ${maxVal}`;
  }

  public static AccountCharacteristics(
    plural: boolean,
    parameter: string
  ): string {
    const grammar = plural
      ? `One or more ${parameter}s are`
      : `The ${parameter} is`;
    const referList =
      parameter === "stateCode"
        ? "Use the two letter postal abbreviation (use TX, not Texas)"
        : `Refer to the list of available ${parameter}s for valid values`;

    if (parameter === "stateCode") {
      return `${grammar} not valid. ${referList}`;
    }

    return `${grammar} not valid. ${referList} ${ErrorMessages.ApiConfigLink(
      parameter
    )}`;
  }

  public static UnitCharacteristics(
    plural: boolean,
    parameter: string
  ): string {
    let grammar = plural
      ? `One or more ${parameter}s are`
      : `The ${parameter} is`;
    let referList =
      parameter === "stateCode"
        ? "Use the two letter postal abbreviation (use TX, not Texas)"
        : `Refer to the list of available ${parameter}s for valid values`;

    if (parameter === "controlTechnologies") {
      grammar = plural ? grammar.replace(`${parameter}s`, parameter) : grammar;
      referList = referList.replace(`${parameter}s`, parameter);
    }

    if (parameter === "stateCode") {
      return `${grammar} not valid. ${referList}`;
    }

    return `${grammar} not valid. ${referList} ${ErrorMessages.ApiConfigLink(
      parameter
    )}`;
  }

  public static MultipleFormat(parameter: string, format: string) {
    return `One or more ${parameter}s are not in the ${format}. Ensure all ${parameter}s are in the ${format}`;
  }

  public static SingleFormat(parameter: string, format: string) {
    return `Ensure that ${parameter} is in the ${format}.`;
  }

  public static BeginEndDate(constraint: string) {
    return `Enter an $property that is greater than or equal to the ${constraint}`;
  }

  public static DateRange(
    parameter: string,
    plural: boolean,
    validRange: string
  ) {
    const grammar = plural
      ? `Update one or more ${parameter}s to`
      : `Update the ${parameter} to`;

    return `${grammar} ${validRange}`;
  }

  public static ReportingQuarter() {
    const curDate = new Date();
    const curYear = new Date().getFullYear();
    let quarter;
    if (curDate < new Date(`March 31, ${curYear}`)) {
      quarter = `12/31/${curYear - 1}`;
    } else if (curDate < new Date(`June 30, ${curYear}`)) {
      quarter = `03/31/${curYear}`;
    } else if (curDate < new Date(`September 30, ${curYear}`)) {
      quarter = `06/30/${curYear}`;
    } else if (curDate < new Date(`December 31, ${curYear}`)) {
      quarter = `09/30/${curYear}`;
    } else {
      quarter = `12/31/${curYear}`;
    }

    return quarter;
  }

  public static YearRange(parameter: string, minYear: string) {
    return `Update one or more ${parameter}s to a year greater than or equal to ${minYear}`;
  }

  public static DateValidity() {
    return `The provided $property $value is not a valid date.`;
  }

  public static RequiredProperty() {
    return `$property should not be null or undefined`;
  }

  public static ValidParameter() {
    return `One or more excluded values are not valid`;
  }

  public static RemovableParameter() {
    return `One or more excluded values cannot be removed`;
  }

  static ApiConfigLink(parameter: string) {
    const mdm = `${ApiConfigService.getMasterDataApi()}`;

    switch (parameter) {
      case "unitType":
        return `${mdm}unit-types`;
      case "unitFuelType":
        return `${mdm}fuel-types`;
      case "controlTechnologies":
        return `${mdm}control-technologies`;
      case "accountType":
        return `${mdm}account-types`;
      case "accountNumber":
        return `${ApiConfigService.getAccountApi()}accounts`;
      case "transactionType":
        return `${mdm}transaction-types`;
      case "sourceCategories":
        return `${mdm}source-categories`;
      case "facilityId":
        return `${ApiConfigService.getFacilitiesApi()}facilities`;
      case "programCodeInfo":
        return `${mdm}programs`;
      default:
        return `${mdm}${parameter}s`;
    }
  }
}
