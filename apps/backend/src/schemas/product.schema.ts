import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  picUrl: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  describe: string;

  @Prop()
  category: string;

  @Prop()
  popular: boolean;

  @Prop()
  colors: Array<string>;

  @Prop()
  material: string;

  @Prop()
  imageArray: Array<{ name: string; path: string; main: boolean }>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
