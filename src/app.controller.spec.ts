import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
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
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!赵子龙');
    });
  });
});
