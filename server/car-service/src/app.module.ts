import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { Car } from './car/car.entity';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/comment.entity';
import { RegistrationModule } from './registration/registration.module';
import { Registration } from './registration/registration.entity';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:async (configService:ConfigService)=>({
        type:'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [ Car, Registration, Comment ],
        synchronize: true,
      })
    }),
    CarModule,
    CommentModule,
    RegistrationModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
