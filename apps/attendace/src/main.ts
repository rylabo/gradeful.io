import { NestFactory } from '@nestjs/core';
import { AttendaceModule } from './attendace.module';

async function bootstrap() {
  const app = await NestFactory.create(AttendaceModule);
  await app.listen(3000);
}
bootstrap();
