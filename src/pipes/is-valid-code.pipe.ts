import {
	registerDecorator,
	ValidationOptions,
	ValidationArguments,
} from "class-validator";

import { FindManyOptions, getManager } from "typeorm";

export function IsValidCode(
	type: any,
	validationOptions?: ValidationOptions,
	findOption?: (ValidationArguments: ValidationArguments) => FindManyOptions
) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			name: "isValidCode",
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: {
				async validate(value: any, args: ValidationArguments) {
					if (value) {
						const manager = getManager();
						let found;
						if (findOption) {
							found = await manager.findOne(type, findOption(args));
						} else {
							found = await manager.findOne(type, value);
						}
						return found != null;
					}
					return true;
				},
			},
		});
	};
}
