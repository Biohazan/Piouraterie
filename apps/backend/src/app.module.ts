import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
// import { LoggerMiddleware } from './logger.middleware';
import { ProductModule } from './product/product.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.development.local` }),
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASS}@${process.env.MONGOOSE_URL}`,
    ),
    ProductModule,
    ProductsModule,
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer): void {
  //   consumer.apply(LoggerMiddleware).forRoutes('*');
  // }
}
