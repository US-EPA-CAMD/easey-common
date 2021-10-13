"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateGreaterThanEqualTo = void 0;
const class_validator_1 = require("class-validator");
function IsDateGreaterThanEqualTo(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isDateGreaterThanEqualTo',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    if (value && relatedValue) {
                        return value >= relatedValue;
                    }
                    return true;
                },
            },
        });
    };
}
exports.IsDateGreaterThanEqualTo = IsDateGreaterThanEqualTo;
//# sourceMappingURL=is-date-greater.pipe.js.map