import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RESERVATION_SERVICE, USER_SERVICE } from 'src/config/services';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_SERVICE) private readonly _userClient:ClientProxy,@Inject(RESERVATION_SERVICE) private readonly _reservationClient:ClientProxy){}
    
    all                   = ()=>this._userClient.send({cmd:'users'},'')
    byUID                 = (uid:string)=>this._userClient.send({cmd:'user_by_uid'},uid)
    findReservationByUser = (id:number)=>this._reservationClient.send({cmd:'user_all_reservation'},id)

}
