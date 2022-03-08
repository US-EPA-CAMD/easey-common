import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsInResponseObject(
  responseObj,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsInResponseObject",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const valueObjList = responseObj.map(({ value }) => ({
            value,
          }));
          const valueList = valueObjList.map((el) => el.value);
          return valueList.includes(value);
        },
      },
    });
  };
}
