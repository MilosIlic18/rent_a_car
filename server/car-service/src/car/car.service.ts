import { Injectable } from '@nestjs/common';
import { Car } from './car.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchCarDto } from './dtos/search.car.dto';

@Injectable()
export class CarService {
    constructor(@InjectRepository(Car) private readonly _carRepo:Repository<Car>){}
    save                        = (car:Car):Promise<Car>=>this._carRepo.save(car)
    edit                        = (car:Car):Promise<Car>=> this._carRepo.save(car)    
    findSingleCar               = (id:number):Promise<Car>=>this._carRepo.findOneBy({carsId:id})

    findAllCars                 = ():Promise<Car[]>=> this._carRepo.find()
    findCarsIsAvailable         = ():Promise<Car[]>=> this._carRepo.findBy({is_available:true})
    findSingleCarWithComment    = (id:number):Promise<Car>=>this._carRepo.findOne({where:{carsId:id,is_available:true},relations:["comments"]})
    findRegistrations           = ():Promise<Car[]>=>this._carRepo.find({relations:['registrations']})
    
    search                      =(data:SearchCarDto):Promise<Car[]>=>this._carRepo.find({
                                        where: {category:data.cat,fuel:data.fuel,is_available:true}
                                    })
}
