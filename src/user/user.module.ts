import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBUserImplementation, UserSchema } from './user.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: MongoDBUserImplementation.name, schema: UserSchema }])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
