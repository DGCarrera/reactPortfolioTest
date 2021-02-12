import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import {MongooseModule} from '@nestjs/mongoose';

import {OrderSchema, Order} from './order.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Orders', schema: OrderSchema}])],
  providers: [OrderService]
})
export class OrderModule {}
