import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { PeopleModule } from './people.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  try {
    dotenv.config();
  } catch {}
  const app = await NestFactory.create(PeopleModule);
  const microserviceKafka = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.MESSAGE_BROKER],
        clientId: 'people-service',
      },
      consumer: {
        groupId: 'people-consumer',
      },
      producer: {
        createPartitioner: Partitioners.DefaultPartitioner,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
