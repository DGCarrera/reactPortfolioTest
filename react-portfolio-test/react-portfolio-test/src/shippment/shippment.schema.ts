import * as mongoose from 'mongoose';
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

const {Schema} = mongoose;

export const ShippmentSchema = new Schema({
    orderId: {type: Schema.Types.ObjectId, ref: 'Orders'},
    invoiceId: {type: Schema.Types.ObjectId, ref: 'Invoices'},
    dimensions: {
        height: {type: Number, required: true},
        width: {type: Number, required: true},
        length: {type: Number, required: true}
    },
    status: {type: String, enum: ['Pickable','Picked','Packed','Shipped','Delivered']},
    lastUpdate: {type: Date, default: Date.now()}
});

export class Shippment{
    id?:string;
    orderId: string;
    invoiceId: string;
    dimensions: {
        height: number;
        width: number;
        length: number;
    };
    status: string;
    lastUpdate: Date;
}

export class NewShippmentDto{
    @ApiProperty()
    orderId: string;
    @ApiProperty()
    invoiceId: string;
    @ApiProperty()
    dimensions: {
        height: number;
        width: number;
        length: number;
    }
    @ApiProperty()
    status: string;
}

export class UpdateShippmentDto{
    @ApiPropertyOptional()
    dimensions: {
        height: number;
        width: number;
        length: number;
    }
    @ApiPropertyOptional()
    status: string;
}