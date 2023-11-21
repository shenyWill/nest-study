import { ArgumentMetadata, BadRequestException, Inject, Injectable, Optional, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class MyValidationPipe implements PipeTransform<any> {

  @Optional()
  @Inject('validation_options')
  private option

  async transform(value: any, metadata: ArgumentMetadata) {
      if (!metadata.metatype) {
        return value;
      }
      console.log(this.option);
      const object = plainToInstance(metadata.metatype, value);
      const errors = await validate(object);
      if (errors.length) {
        throw new BadRequestException('参数验证失败');
      }
      return value;
  }
}