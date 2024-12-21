import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  message:string=''
  catList =[{value:'automobil',name:'Automobil'},{value:'suv',name:'SUV'},{value:'putnicki kombi',name:'Putnicki kombi'}]
  fuelList =[{value:"benzin",name:'Benzin'},{value:'gas',name:'gas'},{value:'dizel',name:'Dizel'}]
  transmissionList = [{value:"automatik",name:'Automatik'},{value:'manuelni',name:'Manuelni'}]
  msgc:string='' 

  transmissionName = "Odaberi"
  catName          = "Odaberite kategoriju automobila"
  fuelName         = "Odaberite gorivo"
  car:any
  carForm:FormGroup
  constructor(private readonly _acRouter:ActivatedRoute,private readonly _carService:CarService,private readonly _router:Router) {
    this.carForm          = new FormGroup({
      carsId:new FormControl(''),
      brand:new FormControl('',[Validators.required,Validators.pattern('[.{4,}]')]),
      price:new FormControl('',[Validators.required,Validators.pattern('[[0-9]{2,}]')]),
      mileage:new FormControl('',[Validators.required,Validators.pattern('[[0-9]{2,}]')]),
      category: new FormControl(null,[Validators.required]),
      fuel: new FormControl(null,[Validators.required]),
      transmission: new FormControl(null,[Validators.required]),
      is_available: new FormControl(null,[Validators.required]),
    })
    this.carForm.controls['category'].setValue(this.catList)
    this.carForm.controls['fuel'].setValue(this.fuelList)
    this.carForm.controls['transmission'].setValue(this.transmissionList)
  }
  ngOnInit(): void {
    this._carService.single(this._acRouter.snapshot.params['id']).subscribe(data=>{
      this.carForm = new FormGroup({
        carsId: new FormControl(data.carsId),
        brand : new FormControl(data.brand),
        price : new FormControl(data.price),
        mileage : new FormControl(data.mileage),
        category: new FormControl(data.category),
        fuel: new FormControl(data.fuel),
        transmission: new FormControl(data.transmission),
        is_available: new FormControl(data.is_available===1?true:false),
      })
      this.msgc = this.carForm.get('is_available')?.value?"Dostupan":"Zauzet"
    })
  }
  onCheckChange(event:any){
    this.msgc = event.target.checked?"Dostupan":"Zauzet"
  }
  
  onSubmit(){
    this._carService.edit(this.carForm.value.carsId,this.carForm.value).subscribe(data=>{this._router.navigate(['../main/cars'])} )
  }

}
