import * as mongoose from 'mongoose';
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

const {Schema} = mongoose;

export const ItemSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true, min: 140},
    price: {type: Number, required: () => !this.isFree },
    isFree: {type: Boolean, default: false}
})

export const LineItemSchema = new Schema({
    itemId: {type: Schema.Types.ObjectId, ref: 'Items'},
    unitPrice: {type: Number, required: true},
    quantity: {type: Number, min: 1}
});

LineItemSchema.virtual('itemTotal').get(function() {
    return this.unitPrice * this.quantity;
});

export class Item{
    id?:string;
    name: string;
    description: string;
    price?:number;
    isFree?:boolean;
}

export class LineItem{
    id?:string;
    itemId: string;
    unitPrice: number;
    quantity: number;
    itemTotal: number;
}

export class ItemDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiPropertyOptional()
    price: string;
    @ApiPropertyOptional()
    isFree: boolean;
}

export class LineItemDto{
    @ApiProperty()
    itemId: string;
    @ApiProperty()
    unitPrice: number;
    @ApiProperty()
    quantity: number;
}