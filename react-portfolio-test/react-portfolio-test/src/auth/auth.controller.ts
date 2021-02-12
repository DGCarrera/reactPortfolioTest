import {
    Controller,
    Request,
    UseGuards,
    Post,
    Get,
    Body,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  import { AuthService } from '../auth/auth.service';
  import { UserService } from './user/user.service';
  import {Model} from 'mongoose';
  import {
    User,
    CreateUserDto,
    CreatedUserDto,
    LoginUserDto,
  } from './user.schema';
  import {
    ApiTags,
    ApiBearerAuth,
    ApiResponse,
    ApiBody,
    ApiProperty
  } from '@nestjs/swagger/dist/decorators';
  
  import { CryptoHelper } from '../auth/crypto.helper';
  
  import { UserData } from './user/user.decorator';

  export class LoginResponse{
      @ApiProperty()
      access_token: string;
  }
  
  @ApiTags('Authentication')
  @Controller('user')
  export class AuthController {
    constructor(
      private readonly authService: AuthService,
      private readonly userService: UserService,
      private readonly cryptoHelper: CryptoHelper,
    ) {}
  
    @ApiBody({
      type: LoginUserDto,
    })
    @ApiResponse({
      status: 201,
      description: 'Successful Login!',
      type: LoginResponse,
    })
    @ApiResponse({ status: 401, description: 'Invalid login attempt' })
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@UserData() user: LoginUserDto): Promise<LoginResponse> {
      try {
        return await this.authService.login(user);
      } catch (e) {
        throw e;
      }
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@UserData() user: Model<User>) {
      return user;
    }
  
    @Post('register')
    @ApiResponse({
      status: 201,
      description: 'Successful Registration of User Account.',
      type: CreatedUserDto,
    })
    async registerUser(@Body() user: CreateUserDto): Promise<CreatedUserDto> {
      const { username, password, password2 } = user;
      try {
        if (password === password2) {
          const hash = await this.cryptoHelper.hashPassword(password);
          // console.log('hash =' + hash);
  
          const newUser: User = {
            username,
            password: hash,
            posts:[],
            profile:null
          };
  
          const u = await this.userService.create(newUser);
          if (!u) throw new Error('User Creation Failed');
  
          const returnUser: CreatedUserDto = {
            username: u.username,
          };
          return returnUser;
        } else {
          throw new Error('Passwords do not match');
        }
      } catch (e) {
        throw e;
      }
    }
  }