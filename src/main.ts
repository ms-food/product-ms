import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: 'TCP',
    options: {
      host: '127.0.0.1',
      port: envs.port,
    },
  });

  const logger = new Logger('Bootstrap');

  //app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //await app.listen(envs.port);

  //logger.log(`App running on port ${envs.port} 🚀`);

  logger.log(`Product ms running on port ${envs.port} 🚀`);
}
bootstrap();
