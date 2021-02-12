import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { UpdatesService } from './updates.service';
import { CreateUpdateDto, Update, UpdateUpdateDto } from './updates.schema';

@ApiTags("Posts")
@Controller('updates')
export class UpdatesController {
    constructor(private readonly updateService: UpdatesService){}

    @ApiParam({
        name: 'id'
    })
    @Get(":id")
    async getUpdateById(@Param() params: {id: string}) {
        try{
            return await this.updateService.readOne(params.id);
        }catch (e) {
            throw e;
        }
    }

    @Get()
    async getUpdates(){
        try{
            return await this.updateService.readAll();
        }catch (e) {
            throw e;
        }
    }

    @Post()
    async create(@Body() createUpdate: CreateUpdateDto){
        try{
            const update = {...new Update(), ...createUpdate};
            return await this.updateService.create(update);
        } catch (e) {
            throw e;
        }
    }

    @ApiParam({
        name: 'id'
    })
    @Patch(":id")
    async updateUpdate(@Param() params: {id: string}, @Body() updateUpdate: UpdateUpdateDto){
        try{
            return await this.updateService.update(params.id, updateUpdate);
        }catch (e) {
            throw e;
        }
    }
}
