import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContactsService } from './contacts.service';
import {Contact, CreateContactDto} from './contacts.schema';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
    constructor(private readonly _contactService: ContactsService) {}

    @Post()
    async createContact(@Body()createContact: CreateContactDto): Promise<Contact>{
        try {
            return await this._contactService.createContact(createContact);
        } catch (e) {
            throw e;
        }
    }

    @Get()
    async getContacts(): Promise<Contact[]>{
        try {
            return await this._contactService.getAllContacts();
        } catch (e) {
            throw e;
        }
    }
}
