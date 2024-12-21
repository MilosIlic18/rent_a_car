import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  username:string=""
  constructor(private readonly _router:Router) { }
  ngOnInit(): void {
    if(sessionStorage['admin']===undefined){
      this._router.navigate([''])
      return
    }
    this.username = JSON.parse(sessionStorage['admin']).username
  }
  signOut():void{
    sessionStorage.removeItem('admin')
    this._router.navigate([''])
  }
}
