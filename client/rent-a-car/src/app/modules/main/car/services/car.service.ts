import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http:HttpClient) { }
  availableCars    = ()=>this._http.get(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL}`)
  search           = (data:any)=>this._http.get(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL+'/v?cat='+data.cat+'&fuel='+data.fuel}`)
  detailCar        = (id:number)=>this._http.get(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL+'/'+id+'/detail'}`)
  addComment       = (data:any)=>this._http.post(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL+environment.api.CAR.COMMENT}`,data)
  addReservation   = (data:any)=>this._http.post(`${environment.api.BASE_URL+environment.api.RESERVATION.BASE_URL}`,data)
}
