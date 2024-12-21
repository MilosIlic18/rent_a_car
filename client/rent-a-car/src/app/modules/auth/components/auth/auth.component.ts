import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    if(sessionStorage['user']!==undefined)
      this._router.navigate(['/'])
  }

}
