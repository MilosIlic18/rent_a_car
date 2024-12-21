import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from 'src/admin/admin.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private readonly _userRepo:Repository<User>,@InjectRepository(Administrator) private readonly _adminRepo:Repository<Administrator>){}
    findUserByEmail    = (email:string):Promise<User|null>=>this._userRepo.findOneBy({email:email})
    findUserByUsername = (username:string):Promise<Administrator|null>=>this._adminRepo.findOneBy({username:username})
    findUserByUID      = (uid:string):Promise<User|null>=>this._userRepo.findOneBy({uid:uid})
    save               = async(user:User):Promise<User>=>this._userRepo.save(user)
    
}
