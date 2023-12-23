import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseArrayPipe,
  Post,
  Put,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../src/schemas/product.schema';
import { FilesInterceptor } from '@nestjs/platform-express';
import { fileManagement, storage } from './utils';
import { CreateProductDto, ImageDto } from './dto/create-product.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard';
import { Roles } from '../auth/roles/roles.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productServices: ProductService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    const product = await this.productServices.findOne(id);
    return product;
  }

  @Roles('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Put(':id')
  @UseInterceptors(
    FilesInterceptor('images', 20, {
      storage: storage,
    }),
  )
  async modifyProduct(
    @Param('id') productId: string,
    @Body(
      'imageArray',
      new ParseArrayPipe({ items: ImageDto, whitelist: true, optional: true }),
    )
    imageArray: ImageDto[],
    @Body()
    createProductDto: CreateProductDto,
    @UploadedFiles()
    files,
  ) {
    Logger.log('files:', files);
    Logger.log('body:', createProductDto);
    if (files) {
      const newImageArray = await fileManagement(files, productId, imageArray);
      createProductDto.imageArray = newImageArray;
    }
    if (imageArray) {
      for (const image of imageArray) {
        if (image.main) {
          createProductDto.picUrl = image.path;
        }
      }
    }
    const modifiedProduct = await this.productServices.modifyOne(
      productId,
      createProductDto,
    );
    return modifiedProduct;
  }

  @Roles('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 20, {
      storage: storage,
    }),
  )
  async createProduct(
    @Body(
      'imageArray',
      new ParseArrayPipe({ items: ImageDto, whitelist: true }),
    )
    imageArray: ImageDto[],
    @Body()
    createProductDto: CreateProductDto,
    @UploadedFiles()
    files,
  ) {
    Logger.log('files:', files);
    Logger.log('body:', createProductDto);
    const newProduct = await this.productServices.create(
      createProductDto,
      imageArray,
      files,
    );

    return newProduct;
  }

  @Roles('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteItem = await this.productServices.deleteItem(id);
    console.log('delete controller', deleteItem);
    return { status: 204 };
  }
}
