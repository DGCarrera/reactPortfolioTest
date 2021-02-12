import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import {MongooseModule} from '@nestjs/mongoose';
import { InvoiceSchema } from './invoice.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Invoices', schema: InvoiceSchema}])],
  providers: [InvoiceService]
})
export class InvoiceModule {}
