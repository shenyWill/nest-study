import { IsInt } from "class-validator";

export class CreateAddressDto {
  name: string;
  @IsInt()
  age: number;
  sex: boolean;
  hobbies: Array<string>;
}
