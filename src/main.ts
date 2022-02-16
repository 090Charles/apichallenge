import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule/*, { cors: true }*/);
  const config = new DocumentBuilder()
    .setTitle('Crud de prueba')
    .setDescription('Este es un crud de prueba')
    .setVersion('1.0')
    .addTag('cats')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  
  // app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
