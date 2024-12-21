import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CAR_SERVICE } from 'src/config/services';

@Injectable()
export class CarsService {
    constructor(@Inject(CAR_SERVICE) private _carService:ClientProxy){}
    all                      = ()=> this._carService.send({cmd:'cars'},'')
    allAvailable             = ()=> this._carService.send({cmd:'cars_is_available'},'')
    single                   = (id:number)=> this._carService.send({cmd:'single_car'},id)
    save                     = (data)=>this._carService.send({cmd:'add_car'},{data})
    edit                     = (id:number,data)=>this._carService.send({cmd:'edit_car'},{id,data})
    findRegistrationsByCarId = (id:number)=>this._carService.send({cmd:'find_registrations_by_car'},id)
    saveRegistration         = (data)=>this._carService.send({cmd:'add_registration'},{data})
}
