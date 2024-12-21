import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserReservationListComponent } from './components/user-reservation-list/user-reservation-list.component';

const routes: Routes = [
  {path:'',component:UserComponent,children:[
    {path:'',component:UserListComponent},
    {path:':id/reservation',component:UserReservationListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
