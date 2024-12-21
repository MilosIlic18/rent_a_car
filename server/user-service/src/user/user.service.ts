import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly _userRepo:Repository<User>){}
    findAllUsers  = ():Promise<User[]>=>this._userRepo.find()
    findUserByUID = (uid:string):Promise<User[]|null>=>this._userRepo.findBy({uid:Like(`${uid}%`)})
}
