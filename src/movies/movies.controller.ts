import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}
  //getAll(@Req() req, @Res() res) 선언하면 Express 앱에 접근 할 수 있다. 즉, NestJS는 Express 위에서 돌아간다.
  //이렇게되면 두개의 프레임워크가 돌아가는 상황이 된다.
  //Express에서 req, res 객체를 많이 사용하지 않는게 중요하다.
  //하지만 Nest방식으로 선언하면 Express도 fastify 둘다 전환 할 수 있다.
  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }
  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `we are searching for a movie with a title: ${searchingYear} `;
  // }
  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    console.log(movieData);
    return this.MoviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.MoviesService.update(movieId, updateData);
  }
}
