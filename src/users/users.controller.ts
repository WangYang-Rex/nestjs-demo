import {
  Body,
  Controller,
  Get,
  Post,
  // Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }
  @Get('list')
  getFindAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post('list')
  postFindAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('add')
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Post('detail')
  findOne(@Body() params: { id: string }): Promise<User> {
    return this.userService.findOne(params.id);
  }
}
