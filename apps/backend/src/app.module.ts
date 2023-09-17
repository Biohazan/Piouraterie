import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Biohaz:UrbansteamMongo8558@cluster0.gxogm.mongodb.net/Pïouraterie',
    ),
    ProductsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
