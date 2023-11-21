import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { APP_PIPE } from '@nestjs/core';
import { MyValidationPipe } from './my-validate';

@Module({
  controllers: [AddressController],
  providers: [AddressService, 
    {
    provide: 'validation_options',
    useFactory() {
      return {
        name: 'zhangsan',
        age: 23,
      }
    }
  },
  {
    provide: APP_PIPE,
    useClass: MyValidationPipe,
  }
]
})
export class AddressModule {}
