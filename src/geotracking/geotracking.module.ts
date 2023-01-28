/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ServiceOrderController } from './serviceorder/serviceorder.controller';

@Module({
    imports: [],
    controllers: [ServiceOrderController],
    providers: [],
})
export class GeotrackingModule {}
