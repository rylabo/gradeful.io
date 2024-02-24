import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientKafka } from '@nestjs/microservices';
import { JsonLdDocument } from 'jsonld';
import { Student, StudentDocument } from './database/student.model';

@Injectable()
export class PeopleService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

  async addStudents(newStudents: JsonLdDocument): Promise<Document[]> {
    return this.studentModel.insertMany(newStudents);
  }
}
