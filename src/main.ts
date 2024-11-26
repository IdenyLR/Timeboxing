import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //SWAGGER
  const config = new DocumentBuilder()
    .setTitle('TIMEBOXING') //nombre del proyecto
    .setDescription('API que permite gestionnar tiempos en actividades')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  //SWAGGER TERMINA

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
