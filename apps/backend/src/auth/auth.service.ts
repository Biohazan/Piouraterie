import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';

const EXPIRE_TIME = 24 * 60 * 60 * 1000;

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser(dto: LoginDto) {
    const user = await this.userService.getUser(dto.username);
    if (user && compare(dto.password, user.password)) {
      return user;
    }
    throw new UnauthorizedException();
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload = { username: user.email, sub: user._id, role: user.role };
    return {
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role,
      },
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '24h',
          secret: process.env.JWTSECRETKEY,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.JWTREFRESHTOKENKEY,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }

  async refreshToken(user: any) {
    const payload = {
      username: user.username,
      role: user.role,
      sub: user.sub,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '24h',
        secret: process.env.jwtSecretKey,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.jwtRefreshTokenKey,
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }
}
