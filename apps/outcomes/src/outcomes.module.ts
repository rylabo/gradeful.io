import { Module } from '@nestjs/common';
import { OutcomesController } from './outcomes.controller';
import { OutcomesService } from './outcomes.service';

@Module({
  imports: [],
  controllers: [OutcomesController],
  providers: [OutcomesService],
})
export class OutcomesModule {}
