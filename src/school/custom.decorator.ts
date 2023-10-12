import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Custom = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return '这是自定义装饰器'
  }
)