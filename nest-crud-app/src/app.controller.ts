/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //if u give route here it would be prefix for all api as it will more reusable
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

    // route has been given for api
    @Get('/object')
    getUserObject(): any {
      return { name: 'Akash', surname: 'Sadawarti' };
    }
}
