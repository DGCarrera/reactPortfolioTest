import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User} from '../user.schema';
import {Model} from 'mongoose';

@Injectable()
export class UserService {
    /**
     * @param  {} @InjectModel('User'
     * @param  {Model<User>} privatereadonlyuserModel
     */
    constructor(@InjectModel('User')private readonly userModel: Model<User>) {}
    
    /**
     * @param  {User} user
     * @returns Promise
     */
    async create(user: User): Promise<User>{
        try{
            const newUser = await this.userModel.create(user);
            if(!newUser){
                throw new Error('Unable to create user....')
            }
            const saved = await newUser.save();
            if(!saved) throw new Error('Unable to save user.');

            return saved;
        }catch(e) {
            throw e;
        }
    }
    /**
     * @param  {string} username
     * @returns Promise
     */
    async findOne(username: string): Promise<User>{
        return await this.userModel.findOne({username}).exec();
    }

    
}
