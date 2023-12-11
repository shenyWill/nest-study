import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from './app.module';
import { join } from 'path';
import { HelloFilter } from './hello.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true
  });
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' })

  // app.useGlobalFilters(new HelloFilter());

  await app.listen(3000);
  // setTimeout(() => {
  //   app.close();
  // }, 3000);
}
bootstrap();
