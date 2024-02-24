import { Kafka, Admin, logLevel } from 'kafkajs';
import { ConfigService } from '@nestjs/config';

export async function setupKafkaTopics(configService: ConfigService) {
  const kafka = new Kafka({
    brokers: [configService.get<string>('MESSAGE_BROKER')],
    logLevel: logLevel.ERROR, // Set log level as needed
  });

  const admin = kafka.admin();

  await admin.connect();

  try {
    await admin.createTopics({
      topics: [
        {
          topic: 'new-students',
          numPartitions: 1,
          replicationFactor: 1,
        },
        // Add more topics if needed
      ],
    });
  } catch (error) {
    console.error('Error creating Kafka topics:', error);
  } finally {
    await admin.disconnect();
  }
}
