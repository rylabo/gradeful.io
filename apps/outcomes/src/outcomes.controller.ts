import { Controller, Get } from '@nestjs/common';
import { OutcomesService } from './outcomes.service';

@Controller()
export class OutcomesController {
  constructor(private readonly outcomesService: OutcomesService) {}

  @Get()
  getHello(): string {
    return this.outcomesService.getHello();
  }
}
