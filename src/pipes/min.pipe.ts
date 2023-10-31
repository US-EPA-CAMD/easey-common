import {
	registerDecorator,
	ValidationOptions,
	ValidationArguments,
} from "class-validator";

function min(num, min) {
	return typeof num === "number" && typeof min === "number" && num >= min;
}

export function Min(minVal: number, validationOptions?: ValidationOptions) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			name: "Min",
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: {
				validate(value: any, args: ValidationArguments) {
					if (value !== null) {
						return min(+value, minVal); 
					}
					return true;
				},
			},
		});
	};
}
