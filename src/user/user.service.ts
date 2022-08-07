import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable, of } from 'rxjs';
import { IService } from 'src/interfaces/service.interface';
import { IUser } from './user.interface';
import { MongoDBUserImplementation, UserDocument } from './user.schema';

// This should be a real class/interface representing a user entity
export type User = any;
/**
 *
 *
 * @export
 * @class UserService
 * @implements {IService}
 */
@Injectable()
export class UserService implements IService<IUser>{

  constructor(@InjectModel(MongoDBUserImplementation.name) private userModel: Model<UserDocument>){}
  
  /**
   *
   *
   * @private
   * @memberof UserService
   */
  private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];
    
      // async findOne(username: string): Promise<IUser | undefined> {
      //   return this.users.find(user => user.username === username);
      // }
      findAll():Observable<IUser[]>{        
        return from(this.userModel.find().exec())
      }
      create(user: IUser): Observable<IUser>{
        return from(this.userModel.create(user))
      }

      findOne(id: number): Observable<IUser>{
        return of({} as IUser)
      }

      findOneByUsername(username: string): Observable<IUser>{
        return of({} as IUser)
      }

      update(el: IUser): Observable<IUser>{
        return of({} as IUser)
      }

      delete(id: number): Observable<IUser>{
        return of({} as IUser)
      }
   
}
