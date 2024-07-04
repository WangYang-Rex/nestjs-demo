import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import {
  Request,
  // Response,
} from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Req() request: Request, @Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return 'success';
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  @HttpCode(204)
  create2(@Param() params, @Body() body, @Query() query): string {
    console.log('params', params);
    console.log('body', body);
    console.log('query', query);
    return 'This action adds a new cat';
  }

  @Post('p')
  @HttpCode(204)
  create01(@Req() request: Request, @Res() res): string {
    console.log('params', request.params);
    console.log('body', request.body);
    console.log('query', request.query);
    res.json({ str: 'This action adds a new cat' });
    return; //'This action adds a new cat';
  }

  @Get('ab*')
  findAll02() {
    return 'This route uses a wildcard';
  }
}
