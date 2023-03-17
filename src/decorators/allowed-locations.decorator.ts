import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const AllowedLocations = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().allowedLocations;
  }
);

export default AllowedLocations;
