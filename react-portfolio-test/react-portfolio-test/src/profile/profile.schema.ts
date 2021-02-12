import * as mongoose from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

const {Schema} = mongoose;

export const ProfileSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    resume: {type: String, required: true},
    projects: [{type: Schema.Types.ObjectId, rej: 'Project'}]
});

export class Profile{
    id?:string;
    userId: string;
    resume?:string;
    projects?: string[];
}
export class CreateProfileDto{
    @ApiPropertyOptional()
    readonly resume?:string;
    @ApiPropertyOptional()
    readonly projects?: string[];
}

export class UpdateProfileDto{
    @ApiPropertyOptional()
    readonly resume?:string;
    @ApiPropertyOptional()
    readonly projects?:string[];
}