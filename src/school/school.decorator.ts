import { SetMetadata } from '@nestjs/common';

export const School = (...args: string[]) => SetMetadata('school', args);
