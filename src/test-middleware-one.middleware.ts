import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from "express";

@Injectable()
export class TestMiddlewareOneMiddleware implements NestMiddleware {
  @Inject('person')
  private readonly person: {name: string; age: number};

  use(req: Request, res: Response, next: () => void) {
    console.log('before');
    console.log('-----', this.person);
    next();
    console.log('after');
  }
}
