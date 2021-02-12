import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {CreateContactDto, Contact} from './contacts.schema';

@Injectable()
export class ContactsService {
    constructor(@InjectModel('Contact') private readonly contactModel: Model<Contact>){}

    async createContact(contact: CreateContactDto): Promise<Contact>{
        try {
            const newContact = await new this.contactModel(contact);
            if(!newContact) throw new Error('unable to save contact');
            const saved = await newContact.save();
            if(!saved) throw new Error('unable to save the contact.')
            return saved;
        } catch (error) {
            throw error;
        }
    }

    async getAllContacts(): Promise<Contact[]>{
        try {
            return await this.contactModel.find().exec();
        } catch (e) {
            throw e;
        }
    }
}
