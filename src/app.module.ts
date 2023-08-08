import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './a/a.module';
import { CController } from './c/c.controller';
import { RModule } from './r/r.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AModule, RModule, PersonModule],
  controllers: [AppController, CController],
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
export class AppModule {}
