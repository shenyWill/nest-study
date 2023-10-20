import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { SchoolService } from './school/school.service';

@Injectable()
export class TestRxjsTapInterceptor implements NestInterceptor {
  constructor(private schoolService: SchoolService){}

  private readonly logger = new Logger(TestRxjsTapInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    return next.handle().pipe(tap((data) => {

      // 这里是更新缓存的操作，这里模拟一下
      this.schoolService.findAll();

      this.logger.log(`log something:`, data);

    }))
  }
}
