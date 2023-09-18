import { ProductService } from './product.service';
import { Product } from '../../src/schemas/product.schema';
export declare class ProductController {
    private readonly productServices;
    constructor(productServices: ProductService);
    findOne(id: string): Promise<Product>;
}
