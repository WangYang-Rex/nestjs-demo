import {
  Body,
  Controller,
  Get,
  Post,
  // Req,
} from '@nestjs/common';
import { SlinkService } from './slink.service';
import { Slink } from './slink.entity';

@Controller('slink')
export class SlinkController {
  constructor(private readonly slinkService: SlinkService) {}
  @Get('list')
  getFindAll(): Promise<Slink[]> {
    return this.slinkService.findAll();
  }
  @Post('list')
  postFindAll(): Promise<Slink[]> {
    return this.slinkService.findAll();
  }

  @Post('add')
  create(@Body() data: Slink): Promise<Slink> {
    return this.slinkService.create(data);
  }

  @Post('detail')
  findOne(@Body() params: { id: string }): Promise<Slink> {
    return this.slinkService.findOne(params.id);
  }

  @Post('delete')
  deleteOne(@Body() params: { id: string }): Promise<Slink[]> {
    this.slinkService.remove(params.id);
    return this.slinkService.findAll();
  }
}
