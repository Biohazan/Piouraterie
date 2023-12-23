import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop()
  adress: string;

  @Prop()
  phoneNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: string;
  name: string;
  surname: string;
  adress?: string;
  phoneNumber?: string;
}
