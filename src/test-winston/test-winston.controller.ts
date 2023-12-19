import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { TestWinstonService } from './test-winston.service';
import { CreateTestWinstonDto } from './dto/create-test-winston.dto';
import { UpdateTestWinstonDto } from './dto/update-test-winston.dto';

@Controller('test-winston')
export class TestWinstonController {
  constructor(private readonly testWinstonService: TestWinstonService) {}

  private logger = new Logger();

  @Post()
  create(@Body() createTestWinstonDto: CreateTestWinstonDto) {
    return this.testWinstonService.create(createTestWinstonDto);
  }

  @Get()
  findAll() {
    this.logger.log('hello log', TestWinstonController.name);
    this.logger.error('hello error', TestWinstonController.name);
    return this.testWinstonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testWinstonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestWinstonDto: UpdateTestWinstonDto) {
    return this.testWinstonService.update(+id, updateTestWinstonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testWinstonService.remove(+id);
  }
}
