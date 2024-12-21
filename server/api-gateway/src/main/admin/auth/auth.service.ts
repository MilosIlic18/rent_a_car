import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USER_SERVICE } from 'src/config/services';

@Injectable()
export class AuthService {
    constructor(@Inject(USER_SERVICE) private readonly _userClient:ClientProxy){}
    signIn = (data)=>this._userClient.send({cmd:'signInAdmin'},data)
}
