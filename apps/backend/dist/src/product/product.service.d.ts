import { Model } from 'mongoose';
import { Product } from '../../src/schemas/product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    findOne(id: string): Promise<Product>;
}
