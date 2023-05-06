import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

//describe 말하다 묘사하다 테스트를 묘사하단다는 의미
describe('MoviesService', () => {
  let service: MoviesService;
  //beforeEach 테스트를 하기전에 실행되는부분
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });
  //it individual text(개별테스트) 줄임말
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', () => {
    expect(2 + 3).toEqual(5);
  });
});
