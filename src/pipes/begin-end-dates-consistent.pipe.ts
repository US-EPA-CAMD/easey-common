import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function BeginEndDatesConsistent(validationOptions: BeginEndDatesConsistentOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'beginEndDatesConsistent',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [
                (validationOptions.skipIf),
                validationOptions.beginDate ? validationOptions.beginDate : 'beginDate',
                validationOptions.beginHour ? validationOptions.beginHour : 'beginHour',
                validationOptions.beginMinute ? validationOptions.beginMinute : 'beginMinute',
                validationOptions.endDate ? validationOptions.endDate : 'endDate',
                validationOptions.endHour ? validationOptions.endHour : 'endHour',
                validationOptions.endMinute ? validationOptions.endMinute : 'endMinute',
            ],
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [
                        skipValidation,
                        beginDateField, beginHourField, beginMinuteField,
                        endDateField, endHourField, endMinuteField,
                    ] = args.constraints;

                    if(skipValidation) return true;

                    const beginDate = new Date(args.object[beginDateField] + 'T00:00:00');
                    if(args.object[beginHourField] !== undefined)
                        beginDate.setHours(args.object[beginHourField]);
                    if(args.object[beginMinuteField] !== undefined)
                        beginDate.setMinutes(args.object[beginMinuteField]);

                    const endDate = new Date(args.object[endDateField] + 'T00:00:00');
                    if(args.object[endHourField] !== undefined)
                        endDate.setHours(args.object[endHourField]);
                    if(args.object[endMinuteField] !== undefined)
                        endDate.setMinutes(args.object[endMinuteField]);

                    return endDate >= beginDate;
                },
            },
        });
    };
}

export interface BeginEndDatesConsistentOptions extends ValidationOptions {
    beginDate?: string,
    beginHour?: string,
    beginMinute?: string,
    endDate?: string,
    endHour?: string,
    endMinute?: string,
    skipIf?: ((object: any) => boolean),
}