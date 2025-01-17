import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KingdomsService } from './kingdoms.service';
import { CreateKingdomDto } from './dto/create-kingdom.dto';
import { UpdateKingdomDto } from './dto/update-kingdom.dto';

@Controller('kingdoms')
export class KingdomsController {
  constructor(private readonly kingdomsService: KingdomsService) {}

  @Post()
  create(@Body() createKingdomDto: CreateKingdomDto) {
    return this.kingdomsService.create(createKingdomDto);
  }

  @Get()
  findAll() {
    return this.kingdomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kingdomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKingdomDto: UpdateKingdomDto) {
    return this.kingdomsService.update(+id, updateKingdomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kingdomsService.remove(+id);
  }
}
