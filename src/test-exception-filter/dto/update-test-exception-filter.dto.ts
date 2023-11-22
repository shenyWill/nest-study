import { PartialType } from '@nestjs/mapped-types';
import { CreateTestExceptionFilterDto } from './create-test-exception-filter.dto';

export class UpdateTestExceptionFilterDto extends PartialType(CreateTestExceptionFilterDto) {}
