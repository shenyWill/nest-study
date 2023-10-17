import { Test, TestingModule } from '@nestjs/testing';
import { TestDynamicModuleService } from './test-dynamic-module.service';

describe('TestDynamicModuleService', () => {
  let service: TestDynamicModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestDynamicModuleService],
    }).compile();

    service = module.get<TestDynamicModuleService>(TestDynamicModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
