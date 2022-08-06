import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { IController } from 'src/interfaces/controller.interface';
import { IProduct } from './product.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController implements IController<IProduct>{
    
    constructor(private readonly producService: ProductService){}
    
    @Get()
    findAll(): Observable<IProduct[]>{
        return this.producService.findAll()
    }

    @Post()
    create(@Body() product: IProduct): Observable<IProduct> {
        return this.producService.create(product)
    }

    @Delete()
    delete(@Param() params): Observable<IProduct> {
        return this.producService.delete(params.id)
    }

    @Get(':id')
    findOne(@Param() params): Observable<IProduct> {
        return this.producService.findOne(params.id)
    }

    @Put()
    update(@Body() product: IProduct): Observable<IProduct> {
        return this.producService.update(product)
    }
}
