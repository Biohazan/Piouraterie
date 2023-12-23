import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  picUrl: string;
  @IsNumber()
  price: number;
  @IsString()
  describe: string;
  @IsString()
  category: string;
  @IsBoolean()
  popular: boolean;
  @IsArray()
  imageArray: ImageDto[];
}

export class ImageDto {
  @IsString()
  name: string;
  @IsString()
  path: string;
  @IsBoolean()
  main: boolean;
}
