import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-registration-list',
  templateUrl: './car-registration-list.component.html',
  styleUrls: ['./car-registration-list.component.css']
})
export class CarRegistrationListComponent implements OnInit {
  registations:any
  carsId:any
  constructor(private readonly _route:ActivatedRoute,private readonly _carService:CarService) { }
  ngOnInit(): void {
    this.carsId = this._route.snapshot.params['id']
    this._carService.registration(this._route.snapshot.params['id']).subscribe(data=>{
      this.registations = data
    })
  }

  onSubmit(form:NgForm){
    form.value.carsId = Number(this.carsId)
    this._carService.addRegistration(form.value).subscribe(data=>{
        window.location.reload()
    })
  }
}
