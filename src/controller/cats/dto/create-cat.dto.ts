import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
