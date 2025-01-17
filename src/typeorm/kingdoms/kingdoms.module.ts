import { Module } from '@nestjs/common';
import { KingdomsService } from './kingdoms.service';
import { KingdomsController } from './kingdoms.controller';

@Module({
  controllers: [KingdomsController],
  providers: [KingdomsService]
})
export class KingdomsModule {}
