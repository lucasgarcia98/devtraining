import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    var string = 'Teste'
    return string
  }
}
