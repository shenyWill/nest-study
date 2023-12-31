import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RModule } from './r/r.module';
import { PersonModule } from './person/person.module';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { SchoolModule } from './school/school.module';
import { TestAModule } from './test-a/test-a.module';
import { TestBModule } from './test-b/test-b.module';
import { TestDynamicModuleModule } from './test-dynamic-module/test-dynamic-module.module';
import { TestDynamicOtherModuleModule } from './test-dynamic-other-module/test-dynamic-other-module.module';
import { TestMiddlewareOneMiddleware } from './test-middleware-one.middleware';
import { AddressModule } from './address/address.module';
import { TestExceptionFilterModule } from './test-exception-filter/test-exception-filter.module';
import { TestMulterUploadModule } from './test-multer-upload/test-multer-upload.module';
import { TestLoggerModule } from './test-logger/test-logger.module';
import { TestWinstonModule } from './test-winston/test-winston.module';

@Module({
  imports: [RModule, PersonModule, AaaModule, BbbModule, CccModule, SchoolModule, TestAModule, TestBModule, TestDynamicModuleModule.register({info: '这是一个动态module'}), TestDynamicOtherModuleModule.register({
    name: 'zhangsan',
    age: 23
  }), AddressModule, TestExceptionFilterModule, TestMulterUploadModule, TestLoggerModule, TestWinstonModule],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'person',
      useValue: {
        name: '赵子龙',
        age: 26
      },
    },
    {
      provide: 'school',
      useFactory() {
        return {
          name: 'scut',
          address: '广州',
        }
      },
    },
    {
      provide: 'info',
      useFactory(person: {name: string; age: number}, appService: AppService) {
        return {
          desc: person.name + person.age,
          say: appService.getHello(),
        }
      },
      inject: ['person', AppService],
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(TestMiddlewareOneMiddleware).forRoutes('*');
    consumer.apply(TestMiddlewareOneMiddleware).forRoutes({
      path: 'school/custom',
      method: RequestMethod.GET
    })
  }
}
