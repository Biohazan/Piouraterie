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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const platform_express_1 = require("@nestjs/platform-express");
const utils_1 = require("./utils");
const create_product_dto_1 = require("./dto/create-product.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const role_guard_1 = require("../auth/role/role.guard");
const roles_decorator_1 = require("../auth/roles/roles.decorator");
let ProductController = class ProductController {
    constructor(productServices) {
        this.productServices = productServices;
    }
    async findOne(id) {
        const product = await this.productServices.findOne(id);
        return product;
    }
    async modifyProduct(productId, imageArray, createProductDto, files) {
        common_1.Logger.log('files:', files);
        common_1.Logger.log('body:', createProductDto);
        if (files) {
            const newImageArray = await (0, utils_1.fileManagement)(files, productId, imageArray);
            createProductDto.imageArray = newImageArray;
        }
        if (imageArray) {
            for (const image of imageArray) {
                if (image.main) {
                    createProductDto.picUrl = image.path;
                }
            }
        }
        const modifiedProduct = await this.productServices.modifyOne(productId, createProductDto);
        return modifiedProduct;
    }
    async createProduct(imageArray, createProductDto, files) {
        common_1.Logger.log('files:', files);
        common_1.Logger.log('body:', createProductDto);
        const newProduct = await this.productServices.create(createProductDto, imageArray, files);
        return newProduct;
    }
    async delete(id) {
        const deleteItem = await this.productServices.deleteItem(id);
        console.log('delete controller', deleteItem);
        return { status: 204 };
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RoleGuard),
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 20, {
        storage: utils_1.storage,
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('imageArray', new common_1.ParseArrayPipe({ items: create_product_dto_1.ImageDto, whitelist: true, optional: true }))),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "modifyProduct", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RoleGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 20, {
        storage: utils_1.storage,
    })),
    __param(0, (0, common_1.Body)('imageArray', new common_1.ParseArrayPipe({ items: create_product_dto_1.ImageDto, whitelist: true }))),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, role_guard_1.RoleGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map