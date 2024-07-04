import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationPipe } from './pipe/validate.pipe';
import { RolesGuard } from './gard/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件
  app.use(logger);
  app.useGlobalGuards(new RolesGuard());
  // app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
