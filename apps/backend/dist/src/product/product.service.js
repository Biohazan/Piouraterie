"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("../../src/schemas/product.schema");
const utils_1 = require("./utils");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findOne(id) {
        const product = await this.productModel.findOne({ _id: id }).exec();
        return product;
    }
    async modifyOne(id, createProductDto) {
        const modifiedProduct = await this.productModel.findOneAndUpdate({ _id: id }, createProductDto, { returnOriginal: false });
        console.log('modifiedproduct', modifiedProduct);
        return modifiedProduct;
    }
    async create(createProductDto, imageArray, files) {
        const createdProduct = await this.productModel.create(createProductDto);
        console.log('createdProduct:', createdProduct);
        const productId = `${createdProduct._id}`;
        if (createdProduct) {
            const newImageArray = await (0, utils_1.fileManagement)(files, productId, imageArray);
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
        }
        else
            throw new Error('Something went wrong');
    }
    async deleteItem(id) {
        const deleteItem = await this.productModel.findByIdAndDelete(id);
        console.log('delete service', deleteItem);
        return deleteItem;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
//# sourceMappingURL=product.service.js.map