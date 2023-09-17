import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.development.local` }),

    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASS}@${process.env.MONGOOSE_URL}`,
    ),
    ProductsModule,
    ProductModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
