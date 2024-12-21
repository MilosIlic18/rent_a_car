import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  message:string=""
  visible:boolean =true
  changetype:boolean = true
  constructor(private readonly _authService:AuthService, private readonly _router:Router) { }
  psw(){
    this.visible=!this.visible
    this.changetype=!this.changetype
  }
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    this._authService.signIn(form.value).subscribe((data:any)=>{
      if(data.statusCode===-102 || data.statusCode===-101){
        this.message="Neispravni parametri za prijavljivanje"
        return
      }
      sessionStorage['user'] = JSON.stringify(data)
      this.message=""
      this._router.navigate([''])
    })
  }

}
