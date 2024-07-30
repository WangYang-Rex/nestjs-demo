// 引入所需内置对象
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

// 它负责捕获作为`HttpException`类实例
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // 用于接收主动发错的错误信息和状态码
    const { message, code } = exception.getResponse() as any;
    response.status(status).json({
      result: code || status,
      message,
      // code: code || status,
      // statusCode: status,
      timestamp: new Date().toLocaleString(),
      path: request.url,
      error: 'Bad Request',
    });
  }
}
