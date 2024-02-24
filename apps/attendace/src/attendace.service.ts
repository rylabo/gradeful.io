import { Injectable } from '@nestjs/common';

@Injectable()
export class AttendaceService {
  getHello(): string {
    return 'Hello World!';
  }
}
