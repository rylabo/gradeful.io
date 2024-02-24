import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

import { mongooseConfig } from './config/mongoose-config';
import { MongooseModule } from '@nestjs/mongoose';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import {
  JsonldFramingModule,
  JsonldFramingPipe,
} from '@gradeful/jsonld-framing';
import { readFileSync } from 'fs';
import * as path from 'path';
import { Student, StudentSchema } from './database/student.model';

const context = JSON.parse(
  readFileSync(path.resolve(__dirname, 'config/context.jsonld'), 'utf8'),
);

const options = {
  context: context,
  frame: { '@type': 'Student' },
};
@Module({
  imports: [
    JsonldFramingModule.register(options),
    MongooseModule.forRoot(mongooseConfig()),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [PeopleController],
  providers: [
    PeopleService,
    {
      provide: 'JSONLD_FRAMING_MODULE_OPTIONS',
      useValue: options,
    },
    JsonldFramingPipe,
  ],
})
export class PeopleModule {}
