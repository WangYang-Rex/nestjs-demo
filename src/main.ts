import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { logger } from './middleware/logger.middleware';
import { HttpExceptionFilter } from './filters/http-exception.filter';
// import { ValidationPipe } from './pipe/validate.pipe';
import { RolesGuard } from './gard/roles.guard';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件
  app.use(logger);
  app.useGlobalGuards(new RolesGuard());
  app.useGlobalInterceptors(new LoggingInterceptor());
  // app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
