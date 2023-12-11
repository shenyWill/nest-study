import { Injectable } from '@nestjs/common';
import { CreateTestMulterUploadDto } from './dto/create-test-multer-upload.dto';
import { UpdateTestMulterUploadDto } from './dto/update-test-multer-upload.dto';

@Injectable()
export class TestMulterUploadService {
  create(createTestMulterUploadDto: CreateTestMulterUploadDto) {
    return 'This action adds a new testMulterUpload';
  }

  findAll() {
    return `This action returns all testMulterUpload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testMulterUpload`;
  }

  update(id: number, updateTestMulterUploadDto: UpdateTestMulterUploadDto) {
    return `This action updates a #${id} testMulterUpload`;
  }

  remove(id: number) {
    return `This action removes a #${id} testMulterUpload`;
  }
}
