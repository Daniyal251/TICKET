import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: ['http://localhost:3003', 'http://localhost:3004', 'http://localhost:3000'],
    credentials: true,
  });

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('TICKET Distribution API')
    .setDescription('API сервиса дистрибуции музыки')
    .setVersion('1.0')
    .addTag('auth', 'Аутентификация')
    .addTag('releases', 'Релизы')
    .addTag('artists', 'Артисты')
    .addTag('distribution', 'Дистрибуция')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3002;

  await app.listen(port);
  console.log(`🎵 Distribution API запущен на порту ${port}`);
  console.log(`📚 Swagger доступен по адресу http://localhost:${port}/api/docs`);
}

bootstrap();
