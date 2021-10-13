"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOrisCode = void 0;
const class_validator_1 = require("class-validator");
function IsOrisCode(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "isOrisCode",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return ((0, class_validator_1.isNumberString)(value, { no_symbols: true }) &&
                        value.length <= 6 &&
                        value != 0);
                },
            },
        });
    };
}
exports.IsOrisCode = IsOrisCode;
//# sourceMappingURL=is-oris-code.pipe.js.map