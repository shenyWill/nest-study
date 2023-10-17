import { DynamicModule, Module } from '@nestjs/common';
import { TestDynamicModuleService } from './test-dynamic-module.service';
import { TestDynamicModuleController } from './test-dynamic-module.controller';

@Module({})
export class TestDynamicModuleModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: TestDynamicModuleModule,
      controllers: [TestDynamicModuleController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        TestDynamicModuleService,
      ],
      exports: []
    }
  }
}
