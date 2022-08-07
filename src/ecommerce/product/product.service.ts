import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map, Observable, of } from "rxjs";
import { IService } from "src/interfaces/service.interface";
import { IProduct } from "./product.interface";

@Injectable()
export class ProductService implements IService<IProduct> {

    constructor(private readonly httpService: HttpService){}

    findAll(): Observable<IProduct[]>{
        return this.httpService
            .get('https://fakestoreapi.com/products')
            .pipe(map(res => res.data as IProduct[]))
    }

    create(product: IProduct): Observable<IProduct> {
        return this.httpService
       .post(`https://fakestoreapi.com/products`,product)
       .pipe(map(res => res.data as IProduct))
    }

    delete(id: number): Observable<IProduct> {
        return this.httpService
        .delete(`https://fakestoreapi.com/products/${id}`)
        .pipe(map(res => res.data as IProduct))
    }

    findOne(id: number): Observable<IProduct> {
        return this.httpService
            .get(`https://fakestoreapi.com/products/${id}`)
            .pipe(map(res => res.data as IProduct))
    }

    update(product: IProduct): Observable<IProduct> {
       let {id, ...data} = product;
       return this.httpService
       .put(`https://fakestoreapi.com/products/${id}`,data)
       .pipe(map(res => res.data as IProduct))
    }

}