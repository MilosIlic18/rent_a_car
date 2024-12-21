import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CarService } from './car.service';
import { Car } from './car.entity';
import { EditCarDto } from './dtos/edit.car.dto';
import { ApiResponse } from 'src/misc/api.response';

@Controller()
export class CarController {
    constructor(private readonly _carService:CarService){}
    @MessagePattern({cmd:'add_car'})
    add(@Payload('data') body):Promise<Car>{
        const car = new Car()
        car.brand = body.brand
        car.price = Number(body.price)
        car.imagePath =  body.imagePath
        car.category  = body.category
        car.mileage = Number(body.mileage)
        car.fuel    = body.fuel
        car.transmission = body.transmission
        return this._carService.save(car)
    }
    @MessagePattern({cmd:'edit_car'})
    async edit(@Payload('id') id:number,@Payload('data') data:EditCarDto):Promise<Car|ApiResponse>{
       
        const existsCar = await this._carService.findSingleCar(id)
        if(existsCar===null){return Promise.resolve(new ApiResponse("info",-206,"Car no exists"))}
        existsCar.brand = data.brand
        existsCar.price = data.price
        existsCar.category  = data.category
        existsCar.mileage = data.mileage
        existsCar.fuel    = data.fuel
        existsCar.transmission = data.transmission
        existsCar.is_available = data.is_available
        return this._carService.save(existsCar)
    }
    @MessagePattern({cmd:'cars'})
    allCar(id:number):Promise<Car[]>{
        return this._carService.findAllCars()
    }
    @MessagePattern({cmd:'cars_is_available'})
    allCarIsAvailable():Promise<Car[]>{
        return this._carService.findCarsIsAvailable()
    }
    @MessagePattern({cmd:'single_car'})
    singleCar(id:number):Promise<Car>{
        return this._carService.findSingleCar(id)
    }
    @MessagePattern({cmd:'single_car_with_comment'})
    singleCarWithComments(@Payload('id') id:number):Promise<Car>{
        return this._carService.findSingleCarWithComment(id)
    }

    @MessagePattern({cmd:'cars_with_registrations'})
    allVehicleRegistration():Promise<Car[]>{
        return this._carService.findRegistrations()
    }

    @MessagePattern({cmd:'search'})
    search(@Payload() data){
        return this._carService.search(data)
    }

}
