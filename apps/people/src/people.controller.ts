import { 
  Controller,
  Inject,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { EventPattern, Payload, ClientKafka } from '@nestjs/microservices';
import { JsonLdDocument } from 'jsonld';
import { JsonldFramingPipe } from '@gradeful/jsonld-framing';
import { PeopleService } from './people.service';
import { Document } from 'mongoose';
import { StudentDocument } from './database/student.model';
@Controller()
export class PeopleController {
  constructor(
    private readonly peopleService: PeopleService
  ) {}

  @EventPattern('new-students')
  async addStudents(
    @Payload(JsonldFramingPipe) newStudents: JsonLdDocument,
  ): Promise<Document[]> {
    const addedStudents : Document[] = await this.peopleService.addStudents(newStudents);
    return addedStudents;
  }
}
