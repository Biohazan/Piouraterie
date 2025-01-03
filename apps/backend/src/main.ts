import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn'],
  });
  app.enableCors({
    origin: ['https://piouraterie.vercel.app', 'http://localhost:3564'],
  });
  app.useStaticAssets(join(__dirname, '..', '../public'), {
    prefix: '/public/',
  });
  await app.listen(4000);
}
bootstrap();
