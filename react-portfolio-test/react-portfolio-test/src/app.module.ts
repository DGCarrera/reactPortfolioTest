import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UpdatesModule } from './updates/updates.module';
import { ProfileModule } from './profile/profile.module';
import { ContactsModule } from './contacts/contacts.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ShippmentModule } from './shippment/shippment.module';
import { ItemModule } from './item/item.module';

import * as dotenv from 'dotenv';

dotenv.config();

const {
  env: { MONGO_URI, MONGO_PORT, MONGO_COLLECTION },
} = process;

let mongo = 'mongodb://';

mongo += MONGO_URI ? MONGO_URI : 'locahost';
mongo += MONGO_PORT ? `:${MONGO_PORT}` : ':27017';
mongo += MONGO_COLLECTION ? `/${MONGO_COLLECTION}` : '/portfolio';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ServeStaticModule.forRoot({rootPath: join(__dirname, '.', 'client/')}),
    UpdatesModule,
    ProfileModule,
    ContactsModule,
    OrderModule,
    CartModule,
    InvoiceModule,
    ShippmentModule,
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
