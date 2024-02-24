import { Injectable } from '@nestjs/common';

@Injectable()
export class OutcomesService {
  getHello(): string {
    return 'Hello World!';
  }
}
