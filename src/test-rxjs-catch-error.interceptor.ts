import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class TestRxjsCatchErrorInterceptor implements NestInterceptor {
  private readonly logger = new Logger(TestRxjsCatchErrorInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(catchError(err => {
      this.logger.error(err.message, err.stack, 123)
      return throwError(() => err)
    }));
  }
}
