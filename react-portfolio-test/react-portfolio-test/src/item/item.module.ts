import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema, LineItemSchema } from './item.schema';
import { LineItemService } from './line-item/line-item.service';
import { ItemService } from './item.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Items', schema: ItemSchema },
      { name: 'LineItems', schema: LineItemSchema },
    ]),
  ],
  providers: [LineItemService, ItemService],
})
export class ItemModule {}
