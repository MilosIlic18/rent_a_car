import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { SharedModule } from 'src/main/shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [CarsService],
  controllers: [CarsController]
})
export class CarsModule {}
