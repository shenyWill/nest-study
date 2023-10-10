import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { PersonFilter } from './person.filter';
@Controller('person')
export class PersonControllers {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}

@Controller('api/person')
export class PersonController {

  @Get('find')
  urlQuery(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name}, age=${age}`;
  }

  @Get(':id')
  @UseFilters(PersonFilter)
  urlParam(@Param('id') id: string) {
    throw new HttpException('789', HttpStatus.BAD_REQUEST);
    return `received: id=${id}`;
  }

  @Post()
  form(@Body() person: CreatePersonDto) {
    return `received: ${JSON.stringify(person)}`;
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }))
  postFile(@Body() person: CreatePersonDto, @UploadedFiles() files: Array<Express.Multer.File>){
    console.log(files);
    return `received: ${JSON.stringify(person)}`;
  }
}