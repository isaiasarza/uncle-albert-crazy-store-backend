import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt.auth.guard';

@Module({
  imports: [AuthModule, UserModule, EcommerceModule],
  controllers: [AppController],
  providers:[{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }]
})
export class AppModule {}
