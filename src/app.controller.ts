import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('person')
  private readonly person: {name: string; age: number};

  @Inject('school')
  private readonly school;

  @Inject('info')
  private readonly info;

  @Get()
  getHello(): string {
    console.log(this.person, this.school, this.info);
    return this.appService.getHello() + this.person.name;
  }
}
