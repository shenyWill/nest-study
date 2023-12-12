import { PartialType } from '@nestjs/mapped-types';
import { CreateTestLoggerDto } from './create-test-logger.dto';

export class UpdateTestLoggerDto extends PartialType(CreateTestLoggerDto) {}
