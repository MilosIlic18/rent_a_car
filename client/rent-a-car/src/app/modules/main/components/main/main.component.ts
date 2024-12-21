import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username:string=''
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.username = sessionStorage['user']===undefined?'Prijava':JSON.parse(sessionStorage['user']).email
  }
  signOut():void{
    sessionStorage.removeItem('user')
    window.location.reload()
  }

}
