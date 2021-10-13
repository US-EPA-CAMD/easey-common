"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsYearFormat = void 0;
const class_validator_1 = require("class-validator");
function IsYearFormat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsYearFormat',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return ((0, class_validator_1.isNumberString)(value, { no_symbols: true }) && value.length === 4);
                    }
                    return true;
                },
            },
        });
    };
}
exports.IsYearFormat = IsYearFormat;
//# sourceMappingURL=is-year-format.pipe.js.map