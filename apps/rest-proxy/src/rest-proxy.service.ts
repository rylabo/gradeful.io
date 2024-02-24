import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { JsonLdDocument } from 'jsonld';

@Injectable()
export class RestProxyService implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject('PROXY_SERVICE') private brokerClient: ClientKafka) {}
  async onModuleInit() {
    this.brokerClient.subscribeToResponseOf('new-students');
    await this.brokerClient.connect();
  }

  async onModuleDestroy() {
    await this.brokerClient.close();
  }
  getHello(): string {
    return 'Hello World!';
  }

  public async addStudents(students) {
    this.brokerClient.emit('new-students', students);
  }
}
