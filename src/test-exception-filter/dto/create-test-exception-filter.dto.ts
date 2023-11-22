import { IsInt, IsString } from "class-validator";

export class CreateTestExceptionFilterDto {
  @IsInt()
  age: number;
  @IsString()
  name: string;
}
