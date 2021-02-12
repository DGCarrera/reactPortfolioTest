import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './user/user.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from './constants';
import { PassportModule } from '@nestjs/passport';
import { CryptoHelper } from './crypto.helper';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '90d'}
    })
],
    providers: [UserService, AuthService, CryptoHelper, JwtStrategy, LocalStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
