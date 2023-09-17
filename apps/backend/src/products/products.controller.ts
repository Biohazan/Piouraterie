import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsService) {}
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsServices.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsServices.findOne(id);
  }
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    await this.productsServices.create(createProductDto);
    return createProductDto;
  }
  // @Put()
  // async update() {
  //   await this.productsServices.update();
  //   return `This action updates all product`;
  // }
}
