import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CharactersModule } from './typeorm/characters/characters.module';
import { KingdomsModule } from './typeorm/kingdoms/kingdoms.module';

@Module({
  imports: [ConfigModule.forRoot(), CharactersModule, KingdomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
