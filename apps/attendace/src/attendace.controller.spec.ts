import { Test, TestingModule } from '@nestjs/testing';
import { AttendaceController } from './attendace.controller';
import { AttendaceService } from './attendace.service';

describe('AttendaceController', () => {
  let attendaceController: AttendaceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AttendaceController],
      providers: [AttendaceService],
    }).compile();

    attendaceController = app.get<AttendaceController>(AttendaceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(attendaceController.getHello()).toBe('Hello World!');
    });
  });
});
