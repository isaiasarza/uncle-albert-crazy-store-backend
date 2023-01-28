/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Public } from 'src/auth/constants';
import { SERVICE_ORDERS } from '../assets/service_order/service_order';


@Controller('service_orders')
export class ServiceOrderController {

    @Public()
    @Get()
    findAll(): Observable<any[]>{
        return of(SERVICE_ORDERS)
    }
}
