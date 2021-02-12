import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

import {resolve, join} from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res) {
    res.sendFile(resolve(join(__dirname, "./client/index.html")));
  }
}
