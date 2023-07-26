import { PartialType } from '@nestjs/mapped-types';
import { CreateRDto } from './create-r.dto';

export class UpdateRDto extends PartialType(CreateRDto) {}
