import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { RouterModule } from '@nestjs/core';
import { baseRoutes } from './base.routes';
import { MainModule } from './main/main.module';
import { SharedModule } from './main/shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
   MulterModule.register(),
   RouterModule.register(baseRoutes),
   MainModule,
   SharedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
