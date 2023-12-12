import { Module } from '@nestjs/common';
import { TestLoggerService } from './test-logger.service';
import { TestLoggerController } from './test-logger.controller';

@Module({
  controllers: [TestLoggerController],
  providers: [TestLoggerService]
})
export class TestLoggerModule {}
