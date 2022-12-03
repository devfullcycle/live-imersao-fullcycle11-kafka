import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
        //com o docker seria host.docker.internal:9094
        //extra_hosts:
        //  - "host.docker.internal:172.17.0.1"
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();

//separar WEB do consumidor