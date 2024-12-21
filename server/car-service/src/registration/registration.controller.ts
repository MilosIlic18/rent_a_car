import { Controller } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AddRegistrationDto } from './dtos/add.registration.dto';
import { Registration } from './registration.entity';

@Controller()
export class RegistrationController {
    constructor(private readonly _registrationService:RegistrationService){}

    @MessagePattern({cmd:'add_registration'})
    save(@Payload('data') data:AddRegistrationDto):Promise<Registration>{
        const registation = new Registration()
        registation.carsId = data.carsId
        registation.startDate = data.startDate
        registation.expireDate = data.expireDate
        return this._registrationService.save(registation)
    }
    @MessagePattern({cmd:'find_registrations_by_car'})
    findByCars(id:number):Promise<Registration[]>{
        return this._registrationService.findRegistrationdByCarId(id)
    }
}
