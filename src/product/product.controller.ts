import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { IController } from 'src/interfaces/controller.interface';
import { IProduct } from './product.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController implements IController<IProduct>{
    
    constructor(private readonly producService: ProductService){}
    
    @Get()
    @UseGuards(JwtAuthGuard)
    findAll(): Observable<IProduct[]>{
        return this.producService.findAll()
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() product: IProduct): Observable<IProduct> {
        return this.producService.create(product)
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    delete(@Param() params): Observable<IProduct> {
        return this.producService.delete(params.id)
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param() params): Observable<IProduct> {
        return this.producService.findOne(params.id)
    }

    @Put()
    @UseGuards(JwtAuthGuard)
    update(@Body() product: IProduct): Observable<IProduct> {
        return this.producService.update(product)
    }
}
