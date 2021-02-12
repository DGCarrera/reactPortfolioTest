import * as mongoose from 'mongoose';

import {ApiProperty} from '@nestjs/swagger';

const {Schema} = mongoose;

export const ContactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true}
});

export class Contact{
    id?: string;
    name: string;
    email: string;
    subject: string;
    message: string;
}

export class CreateContactDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    subject: string;
    @ApiProperty()
    message: string;
}