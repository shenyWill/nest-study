import { Test, TestingModule } from '@nestjs/testing';
import { TestExceptionFilterService } from './test-exception-filter.service';

describe('TestExceptionFilterService', () => {
  let service: TestExceptionFilterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestExceptionFilterService],
    }).compile();

    service = module.get<TestExceptionFilterService>(TestExceptionFilterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
