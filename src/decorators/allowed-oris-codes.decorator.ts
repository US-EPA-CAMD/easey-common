import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AllowedOrisCodes = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().allowedOrisCodes;
  },
);

export default AllowedOrisCodes;
