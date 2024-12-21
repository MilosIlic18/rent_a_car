import { Routes } from "@nestjs/core";
import { AuthModule } from "./auth/auth.module";
import { CarsModule } from "./cars/cars.module";
import { ReservationsModule } from "./reservations/reservations.module";
import { UsersModule } from "./users/users.module";

export const adminRoutes:Routes=[
    {path:'auth',module:AuthModule},
    {path:'cars',module:CarsModule},
    {path:'users',module:UsersModule},
    {path:'reservations',module:ReservationsModule}
    
]