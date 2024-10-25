import { SetMetadata, applyDecorators } from '@nestjs/common';

export function Descriptor(description: string) {
  return applyDecorators(SetMetadata('description', description));
}

export default Descriptor;
