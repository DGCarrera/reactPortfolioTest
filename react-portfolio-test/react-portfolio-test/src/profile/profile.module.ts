import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from './profile.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Profile', schema: ProfileSchema}]), AuthModule],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
