import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  visible:boolean =true
  changetype:boolean = true
  message:string =""
  user:any={}
  constructor(private readonly _authService:AuthService,private readonly _router:Router) { }

  psw(){
    this.visible=!this.visible
    this.changetype=!this.changetype
  }

  ngOnInit(): void {
    if(sessionStorage['admin']!==undefined)
      this._router.navigate(['main'])
  }
  onSubmit(form:NgForm):void{
    this._authService.signIn(form.value).subscribe((data)=>{
      if(data.statusCode===-101 || data.statusCode===-102){
        this.message= 'Neispravni parametri za prijavljivanje'
        return
      }
      this.message= ''
      sessionStorage.setItem('admin',JSON.stringify(data))
      this._router.navigate(['main'])
    })

  }

}
