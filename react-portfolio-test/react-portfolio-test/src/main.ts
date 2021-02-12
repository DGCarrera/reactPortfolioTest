import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
        .setTitle('Portfolio')
        .setDescription('The Default Application.')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('Authentication')
        .addTag('Posts')
        .addTag('Profile')
        .build()

  const doc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('portfolio', app, doc);
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
