import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDto } from './item.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Items') private readonly itemModel: Model<Item>) {}

  async createItem(newItem: ItemDto): Promise<Item> {
    try {
      const i = await new this.itemModel(newItem);
      if (!i) throw new Error('unable to create new item.');
      const saved = await i.save();
      if (!saved) throw new Error('unable to save item');

      return saved;
    } catch (e) {
      throw e;
    }
  }

  async readItem(id: string): Promise<Item> {
    try {
      const item = await this.itemModel.findById(id);
      if (!item) throw new Error('unable to retrieve item from database.');
      return item;
    } catch (e) {
      throw e;
    }
  }
  async readAllItems(): Promise<Item[]> {
    try {
        return await this.itemModel.find().exec();
    } catch (e) {
      throw e;
    }
  }
      async updateItem(id: string, item:ItemDto):Promise<Item>{
          try{
            const i = await this.itemModel.findById(id);
            if(!i) throw new Error('unable to retrieve item for update');
            i.description = item.description === i.description ? i.description : item.description;
            i.name = item.name === i.name ? i.name : item.name;
            i.isFree = item.isFree === i.isFree ? i.isFree : item.isFree;
            i.price = item.price === i.price ? i.price : item.price;

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
