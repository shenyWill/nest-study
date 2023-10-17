import { Controller, Get, Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN, TestDynamicOtherModuleOptions } from './test-dynamic-other.module-definition';

@Controller('test-dynamic-other-module')
export class TestDynamicOtherModuleController {
  @Inject(MODULE_OPTIONS_TOKEN)
  private options: TestDynamicOtherModuleOptions;

  @Get()
  findAll() {
    return this.options;
  }
}
