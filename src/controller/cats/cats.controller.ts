import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  // UseFilters,
} from '@nestjs/common';
import {
  Request,
  // Response,
} from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
// import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller('cats')
// @UseFilters(HttpExceptionFilter) // @UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Req() request: Request, @Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return {
      data: this.catsService.findAll(),
    };
    // return 'success';
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return {
      data: this.catsService.findOne(id),
    };
  }

  @Get()
  async findAll(): Promise<{ data: Cat[] }> {
    return {
      data: this.catsService.findAll(),
    };
  }

  @Get('error')
  async error(): Promise<Cat[]> {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
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

  @Post('clear')
  clear() {
    this.catsService.clear();
    return this.catsService.findAll();
  }
}
