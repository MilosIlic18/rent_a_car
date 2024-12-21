import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private readonly _http:HttpClient) { }
  list = ()=>this._http.get<any>(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL}`)
  single = (id:number)=>this._http.get<any>(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL}/${id}`)
  add  = (data:any)=>this._http.post<any>(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL}`,data)
  edit = (id:number,data:any)=>this._http.put<any>(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL+'/'+id}`,data)
  registration = (id:number)=>this._http.get<any>(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL+'/'+id}/registrations`)
  addRegistration = (data:any)=>this._http.post<any>(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL}/registrations`,data)
}
