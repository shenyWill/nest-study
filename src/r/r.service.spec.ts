import { Test, TestingModule } from '@nestjs/testing';
import { RService } from './r.service';

describe('RService', () => {
  let service: RService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RService],
    }).compile();

    service = module.get<RService>(RService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
