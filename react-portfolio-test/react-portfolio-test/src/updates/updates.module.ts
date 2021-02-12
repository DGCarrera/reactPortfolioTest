import { Module } from '@nestjs/common';
import { UpdatesService } from './updates.service';
import { UpdatesController } from './updates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UpdateSchema } from './updates.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Update', schema: UpdateSchema}])],
  providers: [UpdatesService],
  controllers: [UpdatesController]
})
export class UpdatesModule {}
