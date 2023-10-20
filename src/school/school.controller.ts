import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards, UseInterceptors } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolGuard } from './school.guard';
import { School } from './school.decorator';
import { Merge } from './merge.decorator';
import { Custom } from './custom.decorator';
import { MyQuery } from './MyQuery.decorator';
import { TestRxjsInterceptor } from 'src/test-rxjs.interceptor';
import { TestRxjsTwoInterceptor } from 'src/test-rxjs-two.interceptor';
import { TestRxjsTapInterceptor } from 'src/test-rxjs-tap.interceptor';
import { TestRxjsCatchErrorInterceptor } from 'src/test-rxjs-catch-error.interceptor';
import { TestRxjsTimeoutInterceptor } from 'src/test-rxjs-timeout.interceptor';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  @SetMetadata('school', 'shenyuan')
  @UseGuards(SchoolGuard)
  findAll() {
    return this.schoolService.findAll();
  }

  @Merge('merge', 'zhangyide')
  merge(): string {
    return '这是测试合并装饰器的功能'
  }

  @Get('custom')
  custom(@Custom() c) {
    return c
  }

  @Get('test-rx')
  @UseInterceptors(TestRxjsInterceptor)
  testRx() {
    return 'test-rx';
  }

  @Get('test-rx-two')
  @UseInterceptors(TestRxjsTwoInterceptor)
  testRxTwo() {
    return 'test-rx-two';
  }

  @Get('test-rx-tap')
  @UseInterceptors(TestRxjsTapInterceptor)
  textRxTap() {
    return 'test-rx-tap';
  }

  @Get('test-rx-catch-error')
  @UseInterceptors(TestRxjsCatchErrorInterceptor)
  testRxCatchError() {
    throw new Error('test-rx-catch-error')
  }

  @Get('test-rx-timeout')
  @UseInterceptors(TestRxjsTimeoutInterceptor)
  async testRxTimeout() {
    await new Promise(resolve => setTimeout(() => resolve, 4000));
    return 'ddd';
  }


  @Get('myquery')
  testMyQuery(@MyQuery('name') name, @MyQuery('age') age) {
    return `这是测试自定义Query装饰器 => name: ${name}; age: ${age}`
  }

  @Get(':id')
  @School('zhaozilong')
  @UseGuards(SchoolGuard)
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(+id);
  }
}
