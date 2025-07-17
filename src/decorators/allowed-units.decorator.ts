import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const AllowedUnits = createParamDecorator(
  (_data: never, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().allowedUnits;
  }
);

export default AllowedUnits;
