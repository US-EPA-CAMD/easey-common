"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = void 0;
const api_config_service_1 = require("./api-config.service");
class ErrorMessages {
    static AccountCharacteristics(plural, parameter) {
        const grammar = plural
            ? `One or more ${parameter}s are`
            : `The ${parameter} is`;
        const referList = parameter === "state"
            ? "Use the two letter postal abbreviation (use TX, not Texas)"
            : `Refer to the list of available ${parameter}s for valid values`;
        if (parameter === "state") {
            return `${grammar} not valid. ${referList}`;
        }
        return `${grammar} not valid. ${referList} ${ErrorMessages.ApiConfigLink(parameter)}`;
    }
    static UnitCharacteristics(plural, parameter) {
        let grammar = plural
            ? `One or more ${parameter}s are`
            : `The ${parameter} is`;
        let referList = parameter === "state"
            ? "Use the two letter postal abbreviation (use TX, not Texas)"
            : `Refer to the list of available ${parameter}s for valid values`;
        if (parameter === "controlTechnologies") {
            grammar = plural ? grammar.replace(`${parameter}s`, parameter) : grammar;
            referList = referList.replace(`${parameter}s`, parameter);
        }
        if (parameter === "state") {
            return `${grammar} not valid. ${referList}`;
        }
        return `${grammar} not valid. ${referList} ${ErrorMessages.ApiConfigLink(parameter)}`;
    }
    static MultipleFormat(parameter, format) {
        return `One or more ${parameter}s are not in the ${format}. Ensure all ${parameter}s are in the ${format}`;
    }
    static SingleFormat(parameter, format) {
        return `Ensure that ${parameter} is in the ${format}.`;
    }
    static BeginEndDate(constraint) {
        return `Enter an $property that is greater than or equal to the ${constraint}`;
    }
    static DateRange(parameter, plural, validRange) {
        const grammar = plural
            ? `Update one or more ${parameter}s to`
            : `Update the ${parameter} to`;
        return `${grammar} ${validRange}`;
    }
    static ReportingQuarter() {
        const curDate = new Date();
        const curYear = new Date().getFullYear();
        let quarter;
        if (curDate < new Date(`March 31, ${curYear}`)) {
            quarter = `12/31/'${curYear - 1}`;
        }
        else if (curDate < new Date(`June 30, ${curYear}`)) {
            quarter = `03/31/${curYear}`;
        }
        else if (curDate < new Date(`September 30, ${curYear}`)) {
            quarter = `06/30/${curYear}`;
        }
        else if (curDate < new Date(`December 31, ${curYear}`)) {
            quarter = `09/30/${curYear}`;
        }
        else {
            quarter = `12/31/${curYear}`;
        }
        return quarter;
    }
    static DateValidity() {
        return `The provided $property $value is not a valid date.`;
    }
    static RequiredProperty() {
        return `$property should not be null or undefined`;
    }
    static ApiConfigLink(parameter) {
        const mdm = `${api_config_service_1.ApiConfigService.getMdm()}`;
        switch (parameter) {
            case "orisCode":
                return `${api_config_service_1.ApiConfigService.getFacApi()}facilities`;
            case "unitType":
                return `${mdm}unit-types`;
            case "unitFuelType":
                return `${mdm}fuel-types`;
            case "controlTechnologies":
                return `${mdm}control-technologies`;
            case "accountType":
                return `${mdm}account-types`;
            case "accountNumber":
                return `${api_config_service_1.ApiConfigService.getAcctApi()}accounts`;
            case "transactionType":
                return `${mdm}transaction-types`;
            case "sourceCategories":
                return `${mdm}source-categories`;
            default:
                return `${mdm}${parameter}s`;
        }
    }
}
exports.ErrorMessages = ErrorMessages;
//# sourceMappingURL=error-messages.constants.js.map