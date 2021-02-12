import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LineItem, LineItemDto } from '../item.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel('LineItems') private readonly itemModel: Model<LineItem>) {}

  async createLineItem(newItem: LineItemDto): Promise<LineItem> {
    try {
      const i = await new this.itemModel(newItem);
      if (!i) throw new Error('unable to create new line item.');
      const saved = await i.save();
      if (!saved) throw new Error('unable to save line item');

      return saved;
    } catch (e) {
      throw e;
    }
  }

  async readLineItem(id: string): Promise<LineItem> {
    try {
      const item = await this.itemModel.findById(id);
      if (!item) throw new Error('unable to retrieve item from database.');
      return item;
    } catch (e) {
      throw e;
    }
  }
  async readAllLineItems(): Promise<LineItem[]> {
    try {
        return await this.itemModel.find().exec();
    } catch (e) {
      throw e;
    }
  }
      async updateLineItem(id: string, item:LineItemDto):Promise<LineItem>{
          try{
            const i = await this.itemModel.findById(id);
            if(!i) throw new Error('unable to retrieve item for update');
            i.quantity = item.quantity === i.quantity ? i.quantity : item.quantity;

            const saved = await i.save();
            if(!saved) throw new Error('unable to save item after update.');

            return saved;
          }catch (e) {
              throw e;
          }
      }

    async delete(id:string):Promise<boolean>{
        try{
            return await this.itemModel.findByIdAndRemove(id);
        }catch (e) {
            throw e;
        }
    }
}
