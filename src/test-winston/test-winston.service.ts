import { Injectable } from '@nestjs/common';
import { CreateTestWinstonDto } from './dto/create-test-winston.dto';
import { UpdateTestWinstonDto } from './dto/update-test-winston.dto';

@Injectable()
export class TestWinstonService {
  create(createTestWinstonDto: CreateTestWinstonDto) {
    return 'This action adds a new testWinston';
  }

  findAll() {
    return `This action returns all testWinston`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testWinston`;
  }

  update(id: number, updateTestWinstonDto: UpdateTestWinstonDto) {
    return `This action updates a #${id} testWinston`;
  }

  remove(id: number) {
    return `This action removes a #${id} testWinston`;
  }
}
