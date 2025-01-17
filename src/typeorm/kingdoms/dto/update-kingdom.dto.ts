import { PartialType } from '@nestjs/swagger';
import { CreateKingdomDto } from './create-kingdom.dto';

export class UpdateKingdomDto extends PartialType(CreateKingdomDto) {}
