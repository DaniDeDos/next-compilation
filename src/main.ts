import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  // Set global prefix
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);

  logger.log(
    `Server running on http://localhost:${process.env.PORT ?? 3000}/api`,
  );
}
main();
