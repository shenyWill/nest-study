import { Injectable } from '@nestjs/common';
import { CreateTestExceptionFilterDto } from './dto/create-test-exception-filter.dto';
import { UpdateTestExceptionFilterDto } from './dto/update-test-exception-filter.dto';

@Injectable()
export class TestExceptionFilterService {
  create(createTestExceptionFilterDto: CreateTestExceptionFilterDto) {
    return 'This action adds a new testExceptionFilter';
  }

  findAll() {
    return `This action returns all testExceptionFilter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testExceptionFilter`;
  }

  update(id: number, updateTestExceptionFilterDto: UpdateTestExceptionFilterDto) {
    return `This action updates a #${id} testExceptionFilter`;
  }

  remove(id: number) {
    return `This action removes a #${id} testExceptionFilter`;
  }
}
