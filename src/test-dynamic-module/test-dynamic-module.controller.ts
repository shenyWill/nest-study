import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { TestDynamicModuleService } from './test-dynamic-module.service';
import { CreateTestDynamicModuleDto } from './dto/create-test-dynamic-module.dto';
import { UpdateTestDynamicModuleDto } from './dto/update-test-dynamic-module.dto';

@Controller('test-dynamic-module')
export class TestDynamicModuleController {
  constructor(
    private readonly testDynamicModuleService: TestDynamicModuleService,
    @Inject('CONFIG_OPTIONS') private configOptions: Record<string, any>
  ) {}

  @Post()
  create(@Body() createTestDynamicModuleDto: CreateTestDynamicModuleDto) {
    return this.testDynamicModuleService.create(createTestDynamicModuleDto);
  }

  @Get()
  findAll() {
    console.log(this.configOptions);
    return this.testDynamicModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testDynamicModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDynamicModuleDto: UpdateTestDynamicModuleDto) {
    return this.testDynamicModuleService.update(+id, updateTestDynamicModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testDynamicModuleService.remove(+id);
  }
}
