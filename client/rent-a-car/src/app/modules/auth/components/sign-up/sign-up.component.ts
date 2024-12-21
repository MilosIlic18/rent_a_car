import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message:string=""
  messageEmail:string=""
  messageUid:string=""
  messagePassword:string=""
  visible:boolean =true
  changetype:boolean = true
  visible1:boolean =true
  changetype1:boolean = true
  user:any={}
  constructor(private readonly _auth:AuthService, private _router:Router) { }
  psw(){
    this.visible=!this.visible
    this.changetype=!this.changetype
  }
  psw1(){
    this.visible1=!this.visible1
    this.changetype1=!this.changetype1
  }
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(form.value.password!==form.value.repassword){
      this.messagePassword="Lozinke nisu iste"
      return
    }
    this._auth.signUp(form.value).subscribe((data:any)=>{
      if(data.statusCode===-104){
        this.messageEmail="Email je zauzet"
        return
      }
      if(data.statusCode===-105){
        this.messageUid="JMBG vec postoji"
        return
      }
      this._router.navigate(['../auth'])
    })
  }
}
