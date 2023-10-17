import { Module } from '@nestjs/common';
import { TestDynamicOtherModuleController } from './test-dynamic-other-module.controller';
import { ConfigurableModuleClass } from './test-dynamic-other.module-definition';

@Module({
  imports: [],
  controllers: [TestDynamicOtherModuleController]
})
export class TestDynamicOtherModuleModule extends ConfigurableModuleClass {}
