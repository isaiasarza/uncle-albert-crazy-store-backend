import { Observable } from "rxjs";

export interface IService<T>{
    findAll():Observable<T[]>;
    create(el: T): Observable<T>;
    findOne(id: number): Observable<T>;
    update(el: T): Observable<T>;
    delete(id: number): Observable<T>;
}