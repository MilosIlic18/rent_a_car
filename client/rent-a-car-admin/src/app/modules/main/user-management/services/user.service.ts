import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly _http:HttpClient) { }
  usersList=()=>this._http.get<any>(`${environment.api.BASE_URL+environment.api.USER.BASE_URL}`)
  userByUid=(data:string)=>this._http.get<any>(`${environment.api.BASE_URL+environment.api.USER.BASE_URL+`/`+data}`)
  reservationByUser=(id:number)=>this._http.get<any>(`${environment.api.BASE_URL+environment.api.USER.BASE_URL+`/`+id}/reservations`)
}
