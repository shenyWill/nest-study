import { PartialType } from '@nestjs/mapped-types';
import { CreateTestMulterUploadDto } from './create-test-multer-upload.dto';

export class UpdateTestMulterUploadDto extends PartialType(CreateTestMulterUploadDto) {}
