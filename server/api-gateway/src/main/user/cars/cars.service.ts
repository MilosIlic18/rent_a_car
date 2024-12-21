import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CAR_SERVICE } from 'src/config/services';

@Injectable()
export class CarsService {
    constructor(@Inject(CAR_SERVICE) private _carService:ClientProxy){}
    availableCars =()=>this._carService.send({cmd:'cars_is_available'},'')
    singleCar     =(id:number)=>this._carService.send({cmd:'single_car_with_comment'},id)
    addComments   =(data:any)=>this._carService.send({cmd:'add_comment'},data)
    search        =(data:any)=>this._carService.send({cmd:'search'},data)
}
