import { Injectable } from '@nestjs/common';
import { CreateTestLoggerDto } from './dto/create-test-logger.dto';
import { UpdateTestLoggerDto } from './dto/update-test-logger.dto';

@Injectable()
export class TestLoggerService {
  create(createTestLoggerDto: CreateTestLoggerDto) {
    return 'This action adds a new testLogger';
  }

  findAll() {
    return `This action returns all testLogger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testLogger`;
  }

  update(id: number, updateTestLoggerDto: UpdateTestLoggerDto) {
    return `This action updates a #${id} testLogger`;
  }

  remove(id: number) {
    return `This action removes a #${id} testLogger`;
  }
}
