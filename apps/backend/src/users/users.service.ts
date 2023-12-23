// import { HttpService } from '@nestjs/axios';
// import * as FormData from 'form-data';
// import { catchError, firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser, User } from '../auth/models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUsersDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<IUser>, // private readonly httpService: HttpService,
  ) {}

  async createUser(dto: CreateUsersDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    dto.role = 'user';
    const newUser = await this.userModel.create({ ...dto, password: hash });
    return {
      _id: newUser._id,
      email: newUser.email,
      name: newUser.name,
      surname: newUser.surname,
      role: newUser.role,
    };
  }

  async getUsers(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async getUser(username: string) {
    const user = this.userModel.findOne({
      email: username,
    });
    return user;
  }

  async getMe(userId): Promise<IUser | undefined> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw 'User not found';
    }
    return user;
  }
}
