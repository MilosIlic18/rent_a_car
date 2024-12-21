import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';
import { OrderMailerService } from './services/order-mailer.service';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ Order ]),
    MailerModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=> ({
        transport:'smtps://'+configService.get<string>("MAIL_USERNAME")+":"+configService.get<string>("MAIL_PASSWORD")+"@"+configService.get<string>("MAIL_HOSTNAME"),

        defaults:{
          from: configService.get<string>("MAIL_SENDER")
        }
      }),
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderMailerService]
})
export class OrderModule {}
