import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
// import { MongoExceptionFilter } from '../auth/mongoException.filter';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getMe(@Param() params) {
    return this.userService.getMe(params.id);
  }
}
