import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Invoice, InvoiceDto} from './invoice.schema';



@Injectable()
export class InvoiceService {
constructor(@InjectModel('Invoices') private readonly invoiceModel: Model<Invoice>) {}

    async createInvoice(inv:InvoiceDto):Promise<Invoice>{
        try{
            const newInvoice = await new this.invoiceModel(inv);
            if(!newInvoice) throw new Error('Could not Create Invoice.');

            return await newInvoice.save();
        }catch (e) {
            throw e;
        }
    }

    async readInvoice(id:string):Promise<Invoice>{
        try{
            return await this.invoiceModel.findById(id);
        }catch (e) {
            throw e;
        }
    }

    async readAllInvoices():Promise<Invoice[]>{
        try{
            return await this.invoiceModel.find().exec();
        }catch (e) {
            throw e;
        }
    }

    async updateInvoice(id: string, updatedInvoice:InvoiceDto):Promise<Invoice>{
        try{
            const old = await this.invoiceModel.findById(id);
            if(!old) throw new Error('Unable to retreive invoice to update.');

            old.status = updatedInvoice.status ? updatedInvoice.status : old.status;

            const saved = await old.save();
            if(!saved) throw new Error('unable to save updated invoice.');
            return saved;
        }catch (e) {
            throw e;
        }
    }

    async deleteInvoice(id: string):Promise<Invoice>{
        try{
            return await this.invoiceModel.findByIdAndRemove(id);
        }catch (e) {
            throw e;
        }
    }

}
