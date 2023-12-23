import { IsEmail, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  adress: string;

  @IsString()
  phoneNumber: string;
}
