import { Test, TestingModule } from '@nestjs/testing';
import { TestLoggerService } from './test-logger.service';

describe('TestLoggerService', () => {
  let service: TestLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestLoggerService],
    }).compile();

    service = module.get<TestLoggerService>(TestLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
