import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars:any
  constructor(private readonly _homeService:HomeService) { }

  ngOnInit(): void {
    this._homeService.carsAvailable().subscribe(data=>{
      this.cars = data
    })
  }

}
