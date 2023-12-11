import { Test, TestingModule } from '@nestjs/testing';
import { TestMulterUploadController } from './test-multer-upload.controller';
import { TestMulterUploadService } from './test-multer-upload.service';

describe('TestMulterUploadController', () => {
  let controller: TestMulterUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestMulterUploadController],
      providers: [TestMulterUploadService],
    }).compile();

    controller = module.get<TestMulterUploadController>(TestMulterUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
