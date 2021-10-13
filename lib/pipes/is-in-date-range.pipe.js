"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsInDateRange = void 0;
const class_validator_1 = require("class-validator");
function IsInDateRange(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isInDateRange',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const minDate = args.constraints[0][0];
                    const maxDate = args.constraints[0][1];
                    const dateObject = new Date(value);
                    return dateObject >= minDate && dateObject <= maxDate;
                },
            },
        });
    };
}
exports.IsInDateRange = IsInDateRange;
//# sourceMappingURL=is-in-date-range.pipe.js.map