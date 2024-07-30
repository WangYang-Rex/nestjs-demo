import {
  Dependencies,
  MiddlewareConsumer,
  Module,
  NestModule,
  // RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  // LoggerMiddleware,
  logger,
} from './middleware/logger.middleware';
import { CatsModule } from './controller/cats/cats.module';
import { CatsController } from './controller/cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './controller/users/users.module';
import { DogsModule } from './controller/dogs/dogs.module';
import { SlinkModule } from './controller/slink/slink.module';

@Dependencies(DataSource)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'rm-bp1da276967f735384o.mysql.rds.aliyuncs.com',
      port: 3306,
      username: 'wangyang',
      password: 'Sxwy_10110013228',
      database: 'test_db',
      // entities: [User],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CatsModule,
    UsersModule,
    DogsModule,
    SlinkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  dataSource: any;
  constructor(dataSource) {
    this.dataSource = dataSource;
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LoggerMiddleware)
      .apply(logger)
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/(.*)',
      // )
      // .forRoutes({ path: 'cats', method: RequestMethod.ALL });
      .forRoutes(CatsController);
  }
}
