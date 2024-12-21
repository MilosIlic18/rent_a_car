import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CAR_SERVICE, RESERVATION_SERVICE, USER_SERVICE } from 'src/config/services';
import { SharedController } from './shared.controller';

@Module({
    imports:[
    ClientsModule.registerAsync([
        { 
          inject:[ConfigService],
          name:USER_SERVICE,
          useFactory:async(configService:ConfigService)=> ({
          transport:Transport.TCP,
            options:{
              host:configService.get<string>('USER_SERVICE_HOST'),
              port:configService.get<number>('USER_SERVICE_PORT'),
            }
          }),
        },
        {
          inject:[ConfigService],
          name:CAR_SERVICE,
          useFactory:async(configService:ConfigService)=> ({
            transport:Transport.TCP,
            options:{
                host:configService.get<string>('CAR_SERVICE_HOST'),
                port:configService.get<number>('CAR_SERVICE_PORT'),
            }
          }),
        },
        { 
          inject:[ConfigService],
          name:RESERVATION_SERVICE,
          useFactory:async(configService:ConfigService)=> ({
            transport:Transport.TCP,
            options:{
              host:configService.get<string>('RESERVATION_SERVICE_HOST'),
              port:configService.get<number>('RESERVATION_SERVICE_PORT'),
            }
          }),
      }
    ]),

],
exports:[ClientsModule],
controllers: [SharedController]
})
export class SharedModule {}
