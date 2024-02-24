import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { RestProxyModule } from './rest-proxy.module';

async function bootstrap() {
  const app = await NestFactory.create(RestProxyModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  console.log(configService.get('MESSAGE_BROKER'));
  await app.listen(3000);
}
bootstrap();
