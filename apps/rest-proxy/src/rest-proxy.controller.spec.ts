import { Test, TestingModule } from '@nestjs/testing';
import { RestProxyController } from './rest-proxy.controller';
import { RestProxyService } from './rest-proxy.service';

describe('AppController', () => {
  let appController: RestProxyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RestProxyController],
      providers: [RestProxyService],
    }).compile();

    appController = app.get<RestProxyController>(RestProxyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
