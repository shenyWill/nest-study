import { PartialType } from '@nestjs/mapped-types';
import { CreateTestWinstonDto } from './create-test-winston.dto';

export class UpdateTestWinstonDto extends PartialType(CreateTestWinstonDto) {}
