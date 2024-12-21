import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginAdminDto } from '../dtos/auth/login.admin.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly _http:HttpClient) { }
  signIn=(data:LoginAdminDto):Observable<any>=>this._http.post<any>(`${environment.api.BASE_URL+environment.api.AUTH.BASE_URL}`,data)
}
