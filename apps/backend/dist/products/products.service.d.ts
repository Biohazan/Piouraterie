import { Model } from 'mongoose';
import { Product } from '@/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findByCategory(category: string): Promise<Product[]>;
}
