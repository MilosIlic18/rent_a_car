import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './registration.entity';

@Injectable()
export class RegistrationService {
    constructor(@InjectRepository(Registration) private readonly _registrationRepo:Repository<Registration>){}
    
    findRegistrationdByCarId = (id:number):Promise<Registration[]>=>this._registrationRepo.find({where:{carsId:id},order:{expireDate:'ASC'}})
    save                     = (registration:Registration):Promise<Registration>=>this._registrationRepo.save(registration)
    
}
