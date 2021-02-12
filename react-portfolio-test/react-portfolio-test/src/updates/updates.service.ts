import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Update, UpdateUpdateDto} from './updates.schema';

@Injectable()
export class UpdatesService {

    constructor(@InjectModel('Update') private readonly updateModel: Model<Update>) {}

    async create(update: Update): Promise<Update>{
        try{
            const u = await new this.updateModel(update);
            if(!u) throw new Error('unable to create update.');
            const saved = await u.save();
            if(!saved) throw new Error('unable to save update.');
            return saved;
        } catch(e) {
            throw e;
        }
    }
    async update(id: string, updateUpdate: UpdateUpdateDto): Promise<Update>{
        try{
            const u = await this.updateModel.findById(id);
            if(!u) throw new Error('unable to find update in the database.')

            if(updateUpdate.content){
                u.content = updateUpdate.content;
            }

            if(updateUpdate.title){
                u.title = updateUpdate.title;
            }

            const saved = await u.save();
            if(!saved) throw new Error('Unable to save updates to update.');
            return saved;
        } catch(e) {
            throw e;
        }
    }
    async readOne(id: string): Promise<Update> {
        try{
            return await this.updateModel.findById(id);
        } catch(e) {
            throw e;
        }
    }
    async readAll(){
        try{
            return await this.updateModel.find().exec();
        } catch(e) {
            throw e;
        }
    }

}
