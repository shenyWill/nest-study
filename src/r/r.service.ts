import { Injectable } from '@nestjs/common';
import { CreateRDto } from './dto/create-r.dto';
import { UpdateRDto } from './dto/update-r.dto';

@Injectable()
export class RService {
  create(createRDto: CreateRDto) {
    return 'This action adds a new r';
  }

  findAll() {
    return `This action returns all r`;
  }

  findOne(id: number) {
    return `This action returns a #${id} r`;
  }

  update(id: number, updateRDto: UpdateRDto) {
    return `This action updates a #${id} r`;
  }

  remove(id: number) {
    return `This action removes a #${id} r`;
  }
}
