import { Observable } from "rxjs";

export interface IController<T>{
    findAll():Observable<T[]>;
    create(el: T): Observable<T>;
    findOne(params: any): Observable<T>;
    update(el: T): Observable<T>;
    delete(params: any): Observable<T>;
}