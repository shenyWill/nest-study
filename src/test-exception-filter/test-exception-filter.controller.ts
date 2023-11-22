import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, BadRequestException, UseFilters, ValidationPipe } from '@nestjs/common';
import { TestExceptionFilterService } from './test-exception-filter.service';
import { CreateTestExceptionFilterDto } from './dto/create-test-exception-filter.dto';
import { UpdateTestExceptionFilterDto } from './dto/update-test-exception-filter.dto';
import { HelloFilter } from 'src/hello.filter';

@Controller('test-exception-filter')
export class TestExceptionFilterController {
  constructor(private readonly testExceptionFilterService: TestExceptionFilterService) {}

  @Post()
  @UseFilters(HelloFilter)
  create(@Body(new ValidationPipe()) createTestExceptionFilterDto: CreateTestExceptionFilterDto) {
    console.log(createTestExceptionFilterDto);
    return this.testExceptionFilterService.create(createTestExceptionFilterDto);
  }

  @Get()
  findAll() {
    // throw new HttpException('xxxxx', HttpStatus.BAD_REQUEST);
    throw new BadRequestException('xxx');
    return this.testExceptionFilterService.findAll();
  }

  @Get('hello')
  @UseFilters(HelloFilter)
  getHello(): string {
    throw new BadRequestException('hello-exception');
    return 'hello';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testExceptionFilterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestExceptionFilterDto: UpdateTestExceptionFilterDto) {
    return this.testExceptionFilterService.update(+id, updateTestExceptionFilterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testExceptionFilterService.remove(+id);
  }
}
