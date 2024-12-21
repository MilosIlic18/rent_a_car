import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { ReservationsModule } from './reservations/reservations.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [AuthModule, UsersModule, CarsModule, ReservationsModule]
})
export class AdminModule {}
