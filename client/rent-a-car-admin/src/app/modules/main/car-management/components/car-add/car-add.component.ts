import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  message:string=''

  catList =[{value:'automobil',name:'Automobil'},{value:'suv',name:'SUV'},{value:'putnicki kombi',name:'Putnicki kombi'}]
  fuelList =[{value:"benzin",name:'Benzin'},{value:'gas',name:'Gas'},{value:'dizel',name:'Dizel'}]
  transmissionList = [{value:"automatik",name:'Automatik'},{value:'manuelni',name:'Manuelni'}]
  

  transmissionName = "Odaberi vrstu prenosa"
  catName          = "Odaberite kategoriju automobila"
  fuelName         = "Odaberite vrstu gorivo"
  file:any
  filen:any
  constructor(private readonly _carServIce:CarService,private readonly _router:Router) { }

  selectFile(event:any){
    this.filen = event.target.files[0].name.split('.')[0]
    this.file = event.target.files ? event.target.files[0] : null;
  }
  
  ngOnInit(): void {}

  onSubmit(f:NgForm){
    
    const formData = new FormData()
    formData.append('brand',f.value.brand)
    formData.append('price',f.value.price)
    formData.append('mileage',f.value.mileage)
    formData.append('category',f.value.category)
    formData.append('fuel',f.value.fuel)
    formData.append('transmission',f.value.transmission)
    formData.append('image',this.file)

    this._carServIce.add(formData).subscribe(data=>this._router.navigate(['./main/cars']) )

  }

}
