import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './components/car/car.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarRoutingModule
  ]
})
export class CarModule { }
