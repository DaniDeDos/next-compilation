import { Injectable } from '@nestjs/common';
import { CreateKingdomDto } from './dto/create-kingdom.dto';
import { UpdateKingdomDto } from './dto/update-kingdom.dto';

@Injectable()
export class KingdomsService {
  create(createKingdomDto: CreateKingdomDto) {
    return 'This action adds a new kingdom';
  }

  findAll() {
    return `This action returns all kingdoms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kingdom`;
  }

  update(id: number, updateKingdomDto: UpdateKingdomDto) {
    return `This action updates a #${id} kingdom`;
  }

  remove(id: number) {
    return `This action removes a #${id} kingdom`;
  }
}
