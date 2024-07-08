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
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;

  // @OneToMany((type) => Photo, (photo) => photo.user)
  // photos: Photo[];
}
