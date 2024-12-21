import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly _http:HttpClient) { }

  carsAvailable = ()=>this._http.get<any>(`${environment.api.BASE_URL+environment.api.CAR.BASE_URL+environment.api.CAR.AVAILABLE}`)
}
