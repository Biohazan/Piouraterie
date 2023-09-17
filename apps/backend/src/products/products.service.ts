import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = await this.productModel.create(createProductDto);
    return createdProduct;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).exec();
  }

  // async update(): Promise<any> {
  //   const prod = await this.productModel.find();
  //   prod.forEach(async (product) => {
  //     const test = await this.productModel.findByIdAndUpdate(
  //       { _id: product.id },
  //       { popular: true },
  //       { upsert: true },
  //     );
  //     return test;
  //   });
  //   return true;
  // }
}
