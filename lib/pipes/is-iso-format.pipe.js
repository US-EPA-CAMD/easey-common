"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIsoFormat = void 0;
const class_validator_1 = require("class-validator");
function IsIsoFormat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "isIsoFormat",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return String(value).match(/^\d{4}-\d{2}-\d{2}$/) != null;
                    }
                    return true;
                },
            },
        });
    };
}
exports.IsIsoFormat = IsIsoFormat;
//# sourceMappingURL=is-iso-format.pipe.js.map