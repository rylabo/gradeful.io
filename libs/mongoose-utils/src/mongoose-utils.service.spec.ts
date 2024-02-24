import { Test, TestingModule } from '@nestjs/testing';
import { MongooseUtilsService } from './mongoose-utils.service';

describe('MongooseUtilsService', () => {
  let service: MongooseUtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongooseUtilsService],
    }).compile();

    service = module.get<MongooseUtilsService>(MongooseUtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
