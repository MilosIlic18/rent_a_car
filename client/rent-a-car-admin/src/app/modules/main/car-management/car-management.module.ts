import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarManagementRoutingModule } from './car-management-routing.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './components/car/car.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarRegistrationListComponent } from './components/car-registration-list/car-registration-list.component';


@NgModule({
  declarations: [
    CarListComponent,
    CarComponent,
    CarAddComponent,
    CarEditComponent,
    CarRegistrationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarManagementRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CarManagementModule { }
