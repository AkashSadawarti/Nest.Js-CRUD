/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //only takes field which are in model no extra fields allowed
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  //Swagger
  const config = new DocumentBuilder()
  .setTitle('CRUD-app API Docs')
  .setDescription('The CRUD-app API description')
  .setVersion('1.0')
  .addTag('CRUD-app')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
