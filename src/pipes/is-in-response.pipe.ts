import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsInResponse(
  responseList,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsInResponse",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const valueObjList = responseList.map(({ value }) => ({
            value,
          }));
          const valueList = valueObjList.map((el) => el.value);
          return valueList.includes(value);
        },
      },
    });
  };
}
