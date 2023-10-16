import { forwardRef, Module } from '@nestjs/common';
import { TestBModule } from "src/test-b/test-b.module";

@Module({
  imports: [
    forwardRef(() => TestBModule)
  ]
})
export class TestAModule {}
