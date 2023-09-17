import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../src/schemas/product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productServices: ProductService) {}
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productServices.findOne(id);
  }
}
