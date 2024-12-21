import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './components/car/car.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarRegistrationListComponent } from './components/car-registration-list/car-registration-list.component';

const routes: Routes = [
  {path:'',component:CarComponent,children:[
    {path:'',component:CarListComponent},
    {path:':id/edit',component:CarEditComponent},
    {path:':id/registration',component:CarRegistrationListComponent},
    {path:'add',component:CarAddComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarManagementRoutingModule { }
