import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongodb:27015/uncle-albert'),AuthModule, UserModule, EcommerceModule],
  controllers: [AppController],
  providers:[{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }]
})
export class AppModule {}
