import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { SchoolService } from './school/school.service';

@Injectable()
export class TestRxjsInterceptor implements NestInterceptor {
  constructor(private schoolService: SchoolService){}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(this.schoolService.findAll());
    const now = Date.now();
    return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
