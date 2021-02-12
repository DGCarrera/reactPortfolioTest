import * as mongoose from 'mongoose';
import {ApiProperty} from '@nestjs/swagger';

export const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}],
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
});

export class User{
    id?: string;
    username: string;
    password: string;
    posts: string[];
    profile: string;
}

export class CreateUserDto{
    @ApiProperty()
    readonly username: string;
    @ApiProperty()
    readonly password: string;
    @ApiProperty()
    readonly password2: string;
}
export class CreatedUserDto{
    @ApiProperty()
    readonly username: string;
}
export class LoginUserDto{
    @ApiProperty()
    readonly username: string;
    @ApiProperty()
    readonly password: string;
}