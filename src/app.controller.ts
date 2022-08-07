import { Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/constants';
import { AuthLoginDto } from './auth/interfaces/auth.login.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('auth/login')
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto)
  }
}
