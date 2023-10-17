import { PartialType } from '@nestjs/mapped-types';
import { CreateTestDynamicModuleDto } from './create-test-dynamic-module.dto';

export class UpdateTestDynamicModuleDto extends PartialType(CreateTestDynamicModuleDto) {}
