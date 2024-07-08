import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findOne(id: string): Cat {
    return this.cats.find((cat) => cat.id === id);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  clear(): Cat[] {
    this.cats = [];
    return this.cats;
  }
}
