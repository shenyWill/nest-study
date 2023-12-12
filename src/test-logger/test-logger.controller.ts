import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { TestLoggerService } from './test-logger.service';
import { CreateTestLoggerDto } from './dto/create-test-logger.dto';
import { UpdateTestLoggerDto } from './dto/update-test-logger.dto';

@Controller('test-logger')
export class TestLoggerController {
  private logger = new Logger();
  constructor(private readonly testLoggerService: TestLoggerService) {}

  @Post()
  create(@Body() createTestLoggerDto: CreateTestLoggerDto) {
    return this.testLoggerService.create(createTestLoggerDto);
  }

  @Get()
  findAll() {
    this.logger.debug('aaa', TestLoggerController.name);
    this.logger.error('bbb', TestLoggerController.name);
    this.logger.log('ccc', TestLoggerController.name);
    this.logger.verbose('ddd', TestLoggerController.name);
    this.logger.warn('eee', TestLoggerController.name);

    return this.testLoggerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testLoggerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestLoggerDto: UpdateTestLoggerDto) {
    return this.testLoggerService.update(+id, updateTestLoggerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testLoggerService.remove(+id);
  }
}
