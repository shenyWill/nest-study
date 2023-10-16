import { forwardRef, Module } from '@nestjs/common';
import { TestAModule } from "src/test-a/test-a.module";

@Module({
  imports: [
    forwardRef(() => TestAModule)
  ]
})
export class TestBModule {}
