import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { CarController } from './car.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Car])],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}
