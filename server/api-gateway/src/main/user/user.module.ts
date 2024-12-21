import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [CarsModule, AuthModule, ReservationsModule]
})
export class UserModule {}
