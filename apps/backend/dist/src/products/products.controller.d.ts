import { ProductsService } from './products.service';
import { Product } from '../schemas/product.schema';
export declare class ProductsController {
    private readonly productsServices;
    constructor(productsServices: ProductsService);
    findByCategory(category: string, queryParams: any): Promise<Product[]>;
}
