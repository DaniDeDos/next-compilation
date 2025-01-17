import { Module } from '@nestjs/common';
import { CharactersModule } from './typeorm/characters/characters.module';
import { KingdomsModule } from './typeorm/kingdoms/kingdoms.module';

@Module({
  imports: [CharactersModule, KingdomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
