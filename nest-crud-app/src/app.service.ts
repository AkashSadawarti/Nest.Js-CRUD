import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return `Hello Bootcoding testing Port ${5000}`;
  }
}
