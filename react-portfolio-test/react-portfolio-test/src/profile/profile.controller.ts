import { Controller, Get, Param, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { ApiTags, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { CreateProfileDto, Profile, UpdateProfileDto } from './profile.schema';
import { AuthGuard } from '@nestjs/passport';
import {Model} from 'mongoose';
import {User} from '../auth/user.schema'
import { UserData } from '../auth/user/user.decorator';

@ApiTags("Profile")
@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService){}

    @ApiParam({
        name: 'id'
    })
    @Get(":id")
    async getProfileById(@Param() params: {id: string}) {
        try{
            return await this.profileService.readOne(params.id);
        }catch (e) {
            throw e;
        }
    }

    @Get()
    async getProfiles(){
        try{
            return await this.profileService.readAll();
        }catch (e) {
            throw e;
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@UserData() user: Model<User>, @Body() createProfile: CreateProfileDto){
        try{
            const profile = {...new Profile(), ...createProfile};
            profile.userId = user.data._doc._id;
            return await this.profileService.create(profile);
        } catch (e) {
            throw e;
        }
    }


   @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @ApiParam({
        name: 'id'
    })
    @Patch(":id")
    async updateProfile(@Param() params: {id: string}, @Body() updateProfile: UpdateProfileDto){
        try{
            return await this.profileService.update(params.id, updateProfile);
        }catch (e) {
            throw e;
        }
    }
}
