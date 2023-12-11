import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { TestMulterUploadService } from './test-multer-upload.service';
import { CreateTestMulterUploadDto } from './dto/create-test-multer-upload.dto';
import { UpdateTestMulterUploadDto } from './dto/update-test-multer-upload.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('test-multer-upload')
export class TestMulterUploadController {
  constructor(private readonly testMulterUploadService: TestMulterUploadService) {}

  @Post()
  create(@Body() createTestMulterUploadDto: CreateTestMulterUploadDto) {
    return this.testMulterUploadService.create(createTestMulterUploadDto);
  }

  @Post('test-multer-upload-one')
  @UseInterceptors(FileInterceptor('test-upload', {
    dest: 'uploads'
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('file', file);
    return 'test-multer-upload-one';
  }

  @Post('test-multer-upload-two')
  @UseInterceptors(FilesInterceptor('test-upload', 3, {
    dest: 'uploads'
  }))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body) {
    console.log('body', body);
    console.log('files', files);
    return 'test-multer-upload-two';
  }

  @Get()
  findAll() {
    return this.testMulterUploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testMulterUploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestMulterUploadDto: UpdateTestMulterUploadDto) {
    return this.testMulterUploadService.update(+id, updateTestMulterUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testMulterUploadService.remove(+id);
  }
}
