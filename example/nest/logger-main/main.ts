// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

// imports
import { Logger } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  // Create a new Logger instance for the 'Main' context
  const logger = new Logger('Main');

  await app.listen(process.env.PORT ?? 3000);

  // Log the server startup information
  logger.log(
    `Server running on http://localhost:${process.env.PORT ?? 3000}/api`,
  );
}

main();
