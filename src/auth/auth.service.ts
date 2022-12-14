import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { map } from 'rxjs';
import { UserService } from 'src/user/user.service';
import { AuthLoginDto } from './interfaces/auth.login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private jwtService: JwtService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    return this.userService.findOneByUsername(username)
      .pipe(map(user => {
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }));

  }

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto.username, authLoginDto.password)
    if (!user) throw new UnauthorizedException()
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
