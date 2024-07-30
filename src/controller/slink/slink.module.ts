import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlinkController } from './slink.controller';
import { SlinkService } from './slink.service';
import { Slink } from './slink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slink])],
  controllers: [SlinkController],
  providers: [SlinkService],
})
export class SlinkModule {}
