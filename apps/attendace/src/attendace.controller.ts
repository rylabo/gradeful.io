import { Controller, Get } from '@nestjs/common';
import { AttendaceService } from './attendace.service';

@Controller()
export class AttendaceController {
  constructor(private readonly attendaceService: AttendaceService) {}

  @Get()
  getHello(): string {
    return this.attendaceService.getHello();
  }
}
