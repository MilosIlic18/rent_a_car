import { Routes } from "@nestjs/core";
import { CarsModule } from "./cars/cars.module";
import { AuthModule } from "./auth/auth.module";
import { ReservationsModule } from "./reservations/reservations.module";

export const userRoutes:Routes=[
    {path:'auth',module:AuthModule},
    {path:'cars',module:CarsModule},
    {path:'reservations',module:ReservationsModule}
    
]