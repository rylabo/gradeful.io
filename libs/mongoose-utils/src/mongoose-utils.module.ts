import { Module } from '@nestjs/common';
import { MongooseUtilsService } from './mongoose-utils.service';

@Module({
  providers: [MongooseUtilsService],
  exports: [MongooseUtilsService],
})
export class MongooseUtilsModule {}
