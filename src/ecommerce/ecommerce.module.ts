import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
@Module({
  imports:[HttpModule],
  controllers:[ProductController],
  providers:[ProductService] 
})
export class EcommerceModule {}
