import * as mongoose from 'mongoose';

import {ApiProperty} from '@nestjs/swagger';

const {Schema} = mongoose;

export const OrderSchema = new Schema({
    invoiceId: {type: Schema.Types.ObjectId, ref: 'Invoices'},
    shippmentId: {type: Schema.Types.ObjectId, ref: 'Shippments'},
    lastUpdated: {type: Date, default: Date.now()},
    status: {type: String, enum: ['Created','Paid', "Pikced", "Shipped", "Filled", "Closed"]},
    items: [{type: Schema.Types.ObjectId, ref:'Items'}]
});

export class Order{
    id?: string;
    invoiceId: string;
    shippmentId: string;
    lastUpdated: Date;
    status: string;
    items: string[];
}

export class CreateOrderDto{
    @ApiProperty()
    invoiceId: string;
    @ApiProperty()
    shippmentId: string;
    @ApiProperty()
    items: string[];
}

export class UpdateOrderDto{
    @ApiProperty()
    items: string[]
}