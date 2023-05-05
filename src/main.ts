import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
declare const module: any;
//NestFactory.create(AppModule)을 호출후 3000포트를 리스닝 해준다.
//controller, sevice가 모듈화 되어 AppModule에 담겨져 있다.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //pipe 를 만들어준다 유효성 검사
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 리턴 받아오는 데이터타입으로 자동으로 전환해준다.
    }),
  );
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
