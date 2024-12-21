import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-reservation-list',
  templateUrl: './user-reservation-list.component.html',
  styleUrls: ['./user-reservation-list.component.css']
})
export class UserReservationListComponent implements OnInit {
  reservations:any=[]
  constructor(private readonly _route:ActivatedRoute,private readonly _userService:UserService) { }
  ngOnInit(): void {
    this._userService.reservationByUser(this._route.snapshot.params['id']).subscribe(data=>{
      this.reservations = data
    })
  }

}
