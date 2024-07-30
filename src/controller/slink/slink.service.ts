import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slink } from './slink.entity';

@Injectable()
export class SlinkService {
  constructor(
    @InjectRepository(Slink)
    private slinkRepository: Repository<Slink>,
  ) {
    console.log(slinkRepository);
  }

  findAll(): Promise<Slink[]> {
    return this.slinkRepository.find();
  }

  create(user: Slink): Promise<Slink> {
    return this.slinkRepository.save(user);
  }

  async findOne(id: any): Promise<Slink> {
    const user: any = await this.slinkRepository.findOne({
      where: {
        // name: '白芳',
        id: id, // '1',
      },
    });
    return user;
    // const user: any = await this.slinkRepository.findByIds([id]);
    // return user;
  }

  async remove(id: string): Promise<void> {
    await this.slinkRepository.delete(id);
  }

  async removeAll(): Promise<void> {
    await this.slinkRepository.clear();
  }
}
