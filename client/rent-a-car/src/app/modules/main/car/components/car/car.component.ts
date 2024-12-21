import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:any
  catList =[{value:'automobil',name:'Automobil'},{value:'suv',name:'SUV'},{value:'putnicki kombi',name:'Putnicki kombi'}]
  fuelList =[{value:"benzin",name:'Benzin'},{value:'gas',name:'Gas'},{value:'dizel',name:'Dizel'}]
  catName          = "Izaberi kategoriju"
  fuelName         = "Izaberi vrstu goriva"
  constructor(private _carService:CarService) { }

  ngOnInit(): void {
    this._carService.availableCars().subscribe(data=>{
      this.cars =data
    })
  }
  resetFilter(){
    window.location.reload()
  }
  
  filter(form:NgForm){
    this._carService.search(form.value).subscribe(data=>{
      this.cars =data
    })
  }

}
