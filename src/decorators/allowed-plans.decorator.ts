import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const AllowedPlans = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().allowedPlans;
  }
);

export default AllowedPlans;
