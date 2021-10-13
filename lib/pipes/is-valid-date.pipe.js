"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidDate = void 0;
const class_validator_1 = require("class-validator");
function IsValidDate(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsValidDate',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return (0, class_validator_1.isISO8601)(value, { strict: true });
                    }
                    return true;
                },
            },
        });
    };
}
exports.IsValidDate = IsValidDate;
//# sourceMappingURL=is-valid-date.pipe.js.map