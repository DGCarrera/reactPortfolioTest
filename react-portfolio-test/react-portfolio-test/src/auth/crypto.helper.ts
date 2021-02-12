import { Injectable, Logger } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class CryptoHelper {
  logger: Logger = new Logger('CryptoHelper');
  async hashPassword(pw: string): Promise<string> {
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(pw, salt);
      return hashedPassword;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async compare(pw: string, hash: string): Promise<boolean> {
    try {
      const comparison = bcryptjs.compare(pw, hash);

      return comparison;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}