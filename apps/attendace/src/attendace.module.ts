import { Module } from '@nestjs/common';
import { AttendaceController } from './attendace.controller';
import { AttendaceService } from './attendace.service';

@Module({
  imports: [],
  controllers: [AttendaceController],
  providers: [AttendaceService],
})
export class AttendaceModule {}
