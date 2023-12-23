import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../src/schemas/product.schema';
import { CreateProductDto, ImageDto } from './dto/create-product.dto';
import { fileManagement } from './utils';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findOne({ _id: id }).exec();
    return product;
  }

  async modifyOne(id: string, createProductDto: CreateProductDto) {
    const modifiedProduct = await this.productModel.findOneAndUpdate(
      { _id: id },
      createProductDto,
      { returnOriginal: false },
    );
    console.log('modifiedproduct', modifiedProduct);
    return modifiedProduct;
  }

  async create(
    createProductDto: CreateProductDto,
    imageArray: ImageDto[],
    files: any,
  ) {
    const createdProduct = await this.productModel.create(createProductDto);
    console.log('createdProduct:', createdProduct);
    const productId = `${createdProduct._id}`;

    if (createdProduct) {
      const newImageArray = await fileManagement(files, productId, imageArray);
      createProductDto.imageArray = newImageArray;
      if (imageArray) {
        for (const image of imageArray) {
          if (image.main) {
            createProductDto.picUrl = image.path;
          }
        }
      }
      const modifiedProduct = await this.modifyOne(productId, createProductDto);
      return modifiedProduct;
    } else throw new Error('Something went wrong');
  }

  async deleteItem(id: string) {
    const deleteItem = await this.productModel.findByIdAndDelete(id);
    console.log('delete service', deleteItem);
    return deleteItem;
  }
}
