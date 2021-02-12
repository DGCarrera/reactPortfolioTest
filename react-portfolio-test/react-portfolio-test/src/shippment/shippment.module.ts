import { Module } from '@nestjs/common';
import { ShippmentService } from './shippment.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ShippmentSchema } from './shippment.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Shippments', schema: ShippmentSchema}])],
  providers: [ShippmentService]
})
export class ShippmentModule {}
