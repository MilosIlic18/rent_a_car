import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserReservationListComponent } from './components/user-reservation-list/user-reservation-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserReservationListComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  providers:[UserService]
})
export class UserManagementModule { }
