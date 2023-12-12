import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from './app.module';
import { join } from 'path';
import { HelloFilter } from './hello.filter';
import { MyLogger } from './my-logger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    // logger: new MyLogger()
  });
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' })

  // app.useGlobalFilters(new HelloFilter());

  await app.listen(3000);
  // setTimeout(() => {
  //   app.close();
  // }, 3000);
}
bootstrap();
