import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';
import mongoose from 'mongoose';

@Catch(mongoose.mongo.MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    switch (exception.code) {
      case 11000:
        const ctx = host.switchToHttp(),
          response = ctx.getResponse();

        return response.status(400).json({
          statusCode: 400,
          message: 'Adresse email déja utilisé',
          errors: exception,
        });
    }
  }
}
