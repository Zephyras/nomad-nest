import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;
//NestFactory.create(AppModule)을 호출후 3000포트를 리스닝 해준다.
//controller, sevice가 모듈화 되어 AppModule에 담겨져 있다.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
