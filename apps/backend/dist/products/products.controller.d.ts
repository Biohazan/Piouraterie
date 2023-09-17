import { ProductsService } from './products.service';
import { Product } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsServices;
    constructor(productsServices: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<CreateProductDto>;
}
