import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).exec();
  }

  async findByCategory(
    category: string,
    queryParams: string,
  ): Promise<Product[]> {
    if (category === 'all') {
      console.log('findByCategory queryParams: ', queryParams);
      const products = await this.productModel.find().sort(queryParams).exec();
      return products;
    }
    if (category === 'popular') {
      return this.productModel.find({ popular: true }).exec();
    } else {
      return this.productModel
        .find({ category: category })
        .sort(queryParams)
        .exec();
    }
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
