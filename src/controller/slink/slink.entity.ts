import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // OneToMany,
} from 'typeorm';
// import { Photo } from '../photos/photo.entity';

/**
 * 这个类好像会去db中生成对应的表以及字段??
 * 以上猜想得到了验证！
 */
@Entity()
export class Slink {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  keyword: string;

  @Column()
  link: string;

  @Column()
  slink: string;

  @Column()
  create: string;

  @Column()
  visit: number;

  @Column({ default: true })
  isActive: boolean;

  // @OneToMany((type) => Photo, (photo) => photo.user)
  // photos: Photo[];
}
