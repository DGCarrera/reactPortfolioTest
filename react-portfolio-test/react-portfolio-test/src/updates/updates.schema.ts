import * as mongoose from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

const {Schema} = mongoose;

export const UpdateSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    content: {type: String, required: true, min: 128}
});

export class Update{
    id?:string;
    title?:string;
    content: string;
}
export class CreateUpdateDto{
    @ApiPropertyOptional()
    readonly title?:string;
    @ApiProperty()
    readonly content: string;
}

export class UpdateUpdateDto{
    @ApiPropertyOptional()
    readonly title?:string;
    @ApiPropertyOptional()
    readonly content?:string;
}