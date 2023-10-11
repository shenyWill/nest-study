import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response, Request } from 'express';
import { ExampleException } from "./ExampleException";

@Catch(ExampleException)
export class ExampleFilter<T> implements ExceptionFilter {
  catch(exception: ExampleException, host: ArgumentsHost) {
    console.log(exception, 12345);
    // ArgumentHost 是用于切换 http、ws、rpc 等上下文类型的，可以根据上下文类型取到对应的 argument（request, response）。
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      response.status(500).json({
        a: exception.exceptionA,
        b: exception.exceptionB,
      })
    }
  }
}
