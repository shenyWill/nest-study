import { Test, TestingModule } from '@nestjs/testing';
import { TestWinstonController } from './test-winston.controller';
import { TestWinstonService } from './test-winston.service';

describe('TestWinstonController', () => {
  let controller: TestWinstonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestWinstonController],
      providers: [TestWinstonService],
    }).compile();

    controller = module.get<TestWinstonController>(TestWinstonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
