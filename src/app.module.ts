import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './a/a.module';
import { CController } from './c/c.controller';
import { RModule } from './r/r.module';

@Module({
  imports: [AModule, RModule],
  controllers: [AppController, CController],
  providers: [AppService],
})
export class AppModule {}
