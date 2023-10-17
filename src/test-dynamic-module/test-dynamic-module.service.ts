import { Injectable } from '@nestjs/common';
import { CreateTestDynamicModuleDto } from './dto/create-test-dynamic-module.dto';
import { UpdateTestDynamicModuleDto } from './dto/update-test-dynamic-module.dto';

@Injectable()
export class TestDynamicModuleService {
  create(createTestDynamicModuleDto: CreateTestDynamicModuleDto) {
    return 'This action adds a new testDynamicModule';
  }

  findAll() {
    return `This action returns all testDynamicModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testDynamicModule`;
  }

  update(id: number, updateTestDynamicModuleDto: UpdateTestDynamicModuleDto) {
    return `This action updates a #${id} testDynamicModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} testDynamicModule`;
  }
}
