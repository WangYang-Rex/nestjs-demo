import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    console.log(usersRepository);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async findOne(id: any): Promise<User> {
    const user: any = await this.usersRepository.findOne({
      where: {
        // name: '白芳',
        id: id, // '1',
      },
    });
    return user;
    // const user: any = await this.usersRepository.findByIds([id]);
    // return user;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async removeAll(): Promise<void> {
    await this.usersRepository.clear();
  }
}
