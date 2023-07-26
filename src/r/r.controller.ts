import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RService } from './r.service';
import { CreateRDto } from './dto/create-r.dto';
import { UpdateRDto } from './dto/update-r.dto';

@Controller('r')
export class RController {
  constructor(private readonly rService: RService) {}

  @Post()
  create(@Body() createRDto: CreateRDto) {
    return this.rService.create(createRDto);
  }

  @Get()
  findAll() {
    return this.rService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRDto: UpdateRDto) {
    return this.rService.update(+id, updateRDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rService.remove(+id);
  }
}
