import {
  Body,
  Controller,
  Post,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthGuard } from '@nestjs/passport';
import { MongoExceptionFilter } from './mongoException.filter';
import { CreateUsersDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/auth.dto';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @UseFilters(MongoExceptionFilter)
  async createUser(@Body() dto: CreateUsersDto) {
    return this.usersService.createUser(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    console.log('refreshed');

    return await this.authService.refreshToken(req.user);
  }
}
