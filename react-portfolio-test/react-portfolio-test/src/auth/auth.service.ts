import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { CryptoHelper } from './crypto.helper';
import { User } from './user.schema';

@Injectable()
export class AuthService {
  private logger: Logger = new Logger('[Auth Service]');
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly cryptoHelper: CryptoHelper,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    try {
      const user: User = await this.userService.findOne(username);
      if (!user) throw new Error('Unable to find user in the database.');
      this.logger.log(user);
      const challengeResult: boolean = await this.cryptoHelper.compare(
        password,
        user.password,
      );
      this.logger.log(challengeResult);

      if (challengeResult) {
        const { password, ...result } = user;
        return result;
      }
      return false;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign({ data: user }),
    };
  }
}