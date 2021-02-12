import * as mongoose from 'mongoose';

import {ApiProperty} from '@nestjs/swagger';
const {Schema}  = mongoose;

export const InvoiceSchema = new Schema({
    orderId: {type: Schema.Types.ObjectId, ref: 'Orders'},
    status: {type: String, enum: ['unpaid','paid']}
});

export class Invoice{
    id?: string;
    orderId: string;
    status: string;
}

export class InvoiceDto{
    @ApiProperty()
    orderId: string;
    @ApiProperty()
    status: string;
}