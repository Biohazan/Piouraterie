import { Model } from 'mongoose';
import { Product } from '../schemas/product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    findOne(id: string): Promise<Product>;
    findByCategory(category: string, queryParams: string): Promise<Product[]>;
}
