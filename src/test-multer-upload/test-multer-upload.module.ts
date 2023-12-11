import { Module } from '@nestjs/common';
import { TestMulterUploadService } from './test-multer-upload.service';
import { TestMulterUploadController } from './test-multer-upload.controller';

@Module({
  controllers: [TestMulterUploadController],
  providers: [TestMulterUploadService]
})
export class TestMulterUploadModule {}
