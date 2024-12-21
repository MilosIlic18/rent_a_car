import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any
  constructor(private readonly _userService:UserService) { }

  ngOnInit(): void {
    this._userService.usersList().subscribe((data)=>{
      this.users = data
    })
  }
  onKey(event:any){
    this._userService.userByUid(event.target.value).subscribe(data=>{
      this.users = data
    })
  }
}
