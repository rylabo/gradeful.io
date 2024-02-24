import { NestFactory } from '@nestjs/core';
import { OutcomesModule } from './outcomes.module';

async function bootstrap() {
  const app = await NestFactory.create(OutcomesModule);
  await app.listen(3000);
}
bootstrap();
