import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
    {path:'users',loadChildren:()=>import('./user-management/user-management.module').then(mod=>mod.UserManagementModule)},
    {path:'cars',loadChildren:()=>import('./car-management/car-management.module').then(mod=>mod.CarManagementModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
