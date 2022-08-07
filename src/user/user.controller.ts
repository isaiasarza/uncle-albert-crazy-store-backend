import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IController } from 'src/interfaces/controller.interface';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController implements IController<IUser> {

    constructor(private readonly userService: UserService){}

    @Get()
    findAll(): Observable<IUser[]> {
        return this.userService.findAll()
    }

    @Post()
    create(@Body() user: IUser): Observable<IUser> {
        return this.userService.create(user)
    }

    delete(params: any): Observable<IUser> {
        return this.userService.delete(params.id)
    }

    findOne(params: any): Observable<IUser> {
        return this.userService.findOne(params.id)
    }

    update(el: IUser): Observable<IUser> {
        return this.userService.update(el)
    }

}
