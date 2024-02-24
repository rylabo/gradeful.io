import { Test, TestingModule } from '@nestjs/testing';
import { OutcomesController } from './outcomes.controller';
import { OutcomesService } from './outcomes.service';

describe('OutcomesController', () => {
  let outcomesController: OutcomesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OutcomesController],
      providers: [OutcomesService],
    }).compile();

    outcomesController = app.get<OutcomesController>(OutcomesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(outcomesController.getHello()).toBe('Hello World!');
    });
  });
});
