import { ProductsService } from './products.service';
import { Product } from '@/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsServices;
    constructor(productsServices: ProductsService);
    findByCategory(category: string): Promise<Product[]>;
    create(createProductDto: CreateProductDto): Promise<CreateProductDto>;
}
