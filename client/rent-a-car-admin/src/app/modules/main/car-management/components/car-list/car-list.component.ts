import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars:any=[]
  constructor(private readonly _carService:CarService) { }

  ngOnInit(): void {
    this._carService.list().subscribe(data=>{
      this.cars = data
    })
  }

}
