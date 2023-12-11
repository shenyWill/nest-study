import { Test, TestingModule } from '@nestjs/testing';
import { TestMulterUploadService } from './test-multer-upload.service';

describe('TestMulterUploadService', () => {
  let service: TestMulterUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestMulterUploadService],
    }).compile();

    service = module.get<TestMulterUploadService>(TestMulterUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
