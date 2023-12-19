import { Test, TestingModule } from '@nestjs/testing';
import { TestWinstonService } from './test-winston.service';

describe('TestWinstonService', () => {
  let service: TestWinstonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestWinstonService],
    }).compile();

    service = module.get<TestWinstonService>(TestWinstonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
