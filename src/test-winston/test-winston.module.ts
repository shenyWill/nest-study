import { Module } from '@nestjs/common';
import { TestWinstonService } from './test-winston.service';
import { TestWinstonController } from './test-winston.controller';

@Module({
  controllers: [TestWinstonController],
  providers: [TestWinstonService]
})
export class TestWinstonModule {}
