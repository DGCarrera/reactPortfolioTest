import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Profile, UpdateProfileDto} from './profile.schema';

@Injectable()
export class ProfileService {

    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

    async create(profile: Profile): Promise<Profile>{
        try{
            const p = await new this.profileModel(profile);
            if(!p) throw new Error('unable to create profile.');
            const saved = await p.save();
            if(!saved) throw new Error('unable to save profile.');
            return saved;
        } catch(e) {
            throw e;
        }
    }
    async update(id: string, updateProfile: UpdateProfileDto): Promise<Profile>{
        try{
            const p = await this.profileModel.findById(id);
            if(!p) throw new Error('unable to find update in the database.')

            if(updateProfile.resume){
                p.resume = updateProfile.resume;
            }

            if(updateProfile.projects){
                p.projects = updateProfile.projects;
            }

            const saved = await p.save();
            if(!saved) throw new Error('Unable to save updates to update.');
            return saved;
        } catch(e) {
            throw e;
        }
    }
    async readOne(id: string): Promise<Profile> {
        try{
            return await this.profileModel.findById(id);
        } catch(e) {
            throw e;
        }
    }
    async readAll(){
        try{
            return await this.profileModel.find().exec();
        } catch(e) {
            throw e;
        }
    }

}
