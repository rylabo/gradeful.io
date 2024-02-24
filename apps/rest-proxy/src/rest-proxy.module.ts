import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { RestProxyController } from './rest-proxy.controller';
import { RestProxyService } from './rest-proxy.service';
import { setupKafkaTopics } from '../config/setup-kafka.utils';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RestProxyController],
  providers: [
    RestProxyService,
    {
      provide: 'PROXY_SERVICE',
      useFactory: async (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'gradeful-proxy',
              brokers: [configService.get('MESSAGE_BROKER')],
            },
            consumer: {
              groupId: 'gradeful-io-proxy',
            },
            producer: {
              createPartitioner: Partitioners.DefaultPartitioner,
            },
          },
        }),
      inject: [ConfigService],
    },
  ],
})
export class RestProxyModule {
  // constructor(private configService: ConfigService) {
  //   // Call the Kafka topic setup function during module initialization
  //   setupKafkaTopics(configService).catch((error) => {
  //     console.error('Failed to setup Kafka topics:', error);
  //   });
  // }
}
