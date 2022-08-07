import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HttpModule, AuthModule, UserModule],
  controllers: [AppController, ProductController],
  providers: [ProductService],
})
export class AppModule {}
