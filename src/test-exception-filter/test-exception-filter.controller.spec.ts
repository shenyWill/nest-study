import { Test, TestingModule } from '@nestjs/testing';
import { TestExceptionFilterController } from './test-exception-filter.controller';
import { TestExceptionFilterService } from './test-exception-filter.service';

describe('TestExceptionFilterController', () => {
  let controller: TestExceptionFilterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestExceptionFilterController],
      providers: [TestExceptionFilterService],
    }).compile();

    controller = module.get<TestExceptionFilterController>(TestExceptionFilterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
