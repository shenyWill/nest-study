import { ConfigurableModuleBuilder } from "@nestjs/common";

export interface TestDynamicOtherModuleOptions {
  name: string;
  age: number;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<TestDynamicOtherModuleOptions>().build();