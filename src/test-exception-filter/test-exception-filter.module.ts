import { Module } from '@nestjs/common';
import { TestExceptionFilterService } from './test-exception-filter.service';
import { TestExceptionFilterController } from './test-exception-filter.controller';

@Module({
  controllers: [TestExceptionFilterController],
  providers: [TestExceptionFilterService]
})
export class TestExceptionFilterModule {}
