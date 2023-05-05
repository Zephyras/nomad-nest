import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

//@Module을 데코레이터라고 칭한다. (클래스에 함수 기능을 추가해줄수걸 말한다.)
//예시로 아이스크림 위에 초콜릿 칩을 뿌리는것 같다.
//controller는 기본적으로 url을 가져오고 함수를 실행하는 역할을 한다. node.js 같은 라우터 역활이다.
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
