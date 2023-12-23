import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsService) {}

  @Get(':category')
  async findByCategory(
    @Param('category') category: string,
    @Query() queryParams,
  ): Promise<Product[]> {
    return this.productsServices.findByCategory(category, queryParams);
  }

  // @Put()
  // async update() {
  //   await this.productsServices.update();
  //   return `This action updates all product`;
  // }
}
