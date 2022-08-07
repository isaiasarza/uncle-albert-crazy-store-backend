import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IUser } from "./user.interface";

export type UserDocument = MongoDBUserImplementation & Document;

@Schema({collection: 'users'})
export class MongoDBUserImplementation implements IUser{
    
    @Prop()
    username: string;
    @Prop()
    password: string;
    @Prop()
    firstname: string;
    @Prop()
    lastname: string;
    @Prop()
    birthdate: string;
    @Prop()
    gender: string;

}

export const UserSchema = SchemaFactory.createForClass(MongoDBUserImplementation);
