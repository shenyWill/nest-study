import { Module } from '@nestjs/common';
import { RService } from './r.service';
import { RController } from './r.controller';

@Module({
  controllers: [RController],
  providers: [RService]
})
export class RModule {}
