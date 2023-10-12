import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolGuard } from './school.guard';
import { School } from './school.decorator';
import { Merge } from './merge.decorator';
import { Custom } from './custom.decorator';
import { MyQuery } from './MyQuery.decorator';

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
