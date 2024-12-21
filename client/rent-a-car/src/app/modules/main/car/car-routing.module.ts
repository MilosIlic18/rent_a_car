import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path:'',component:CarComponent},
  {path:':id/detail',component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
