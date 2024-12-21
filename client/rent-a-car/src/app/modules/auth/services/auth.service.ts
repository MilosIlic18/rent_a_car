import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly _http:HttpClient) { }
  signIn=(data:any)=>this._http.post(`${environment.api.BASE_URL+environment.api.AUTH.BASE_URL+environment.api.AUTH.SIGNIN}`,data)
  signUp=(data:any)=>this._http.post(`${environment.api.BASE_URL+environment.api.AUTH.BASE_URL}`,data)
}
