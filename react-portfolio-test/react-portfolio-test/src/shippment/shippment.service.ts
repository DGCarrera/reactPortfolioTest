import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Shippment, NewShippmentDto, UpdateShippmentDto} from './shippment.schema';

@Injectable()
export class ShippmentService {
    constructor(@InjectModel('Shippments') private readonly shippmentModel:Model<Shippment> ){}

    async createShippment(ship:NewShippmentDto):Promise<Shippment>{
        try{
            const newShip = await new this.shippmentModel(ship);
            if(!newShip) throw new Error('Unable to create new shippment.');
            return await newShip.save();
        }catch (e) {
            throw e;
        }
    }

    async updateShippment(id: string, ship:UpdateShippmentDto):Promise<Shippment>{
        try{
            const oldShip = await this.shippmentModel.findById(id);
            oldShip.status = ship.status ? ship.status : oldShip.status;
            oldShip.dimentsions = ship.dimensions ? ship.dimensions : ship.dimensions;

            const saved = await oldShip.save();
            if(!saved) throw new Error('Unable to save updated shippment');
            return saved;
        }catch (e) {
            throw e;
        }
    }

    async readOneShippment(id: string):Promise<Shippment>{
        try{
            return await this.shippmentModel.findById(id);
        }catch (e) {
            throw e;
        }
    }

    async readAllShippments():Promise<Shippment[]>{
        try{
            return await this.shippmentModel.find().exec();
        }catch (e) {
            throw e;
        }
    }

    async deleteShippment(id: string):Promise<Shippment>{
        try{
            return await this.shippmentModel.findByIdAndRemove(id);
        }catch (e) {
            throw e;
        }
    }

}
