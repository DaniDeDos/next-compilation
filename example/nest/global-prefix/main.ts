import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  // Set global prefix
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);

  console.log(
    `Server running on http://localhost:${process.env.PORT ?? 3000}/api`,
  );
}
main();
