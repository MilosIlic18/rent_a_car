import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  car:any={}
  enbtn:any
  msg:string=''
  constructor(private _aRouter:ActivatedRoute,private _carService:CarService) { }

  ngOnInit(): void {
    this._carService.detailCar(this._aRouter.snapshot.params['id']).subscribe(data=>{
      this.car = data
    })
    this.enbtn = sessionStorage['user']===undefined?true:false
  }
  addComment(f:NgForm){
    f.value.carsId = this.car.carsId
    f.value.usersId = JSON.parse(sessionStorage['user']).userId
    console.log(f.value)
    this._carService.addComment(f.value).subscribe(data=>{
      window.location.reload()
    })
  }
  reservation(f:NgForm){
    if(f.value.age>=18){
      this.msg=''
      const reservation ={
        data:{
          usersId: JSON.parse(sessionStorage['user']).userId,
          email: JSON.parse(sessionStorage['user']).email,
          locationStart:f.value.locs,
          locationEnd: f.value.locend,
          startDate: f.value.datestart,
          endDate: f.value.dateend,
          dateExpireLicense:f.value.expirelicense
        },
        car:this.car
      }
      this._carService.addReservation(reservation).subscribe((data:any)=>{
        if(data.statusCode===-121){
          this.msg="Datum isticanja vozacke dozvole ne sme biti kraci od 15 dana pre izdavanja automobila."
          return
        }
        this.msg="Uspesno ste obavili proces rezervacije. Na svaku trecu rezervaciju ostvarujete popust od 5%."
        return
      })
    }
    else
    this.msg='Moguce je rezervisati automobil ako ste punoletni.'
  }

}
