import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RESERVATION_SERVICE } from 'src/config/services';

@Injectable()
export class ReservationsService {
    constructor(@Inject(RESERVATION_SERVICE) private readonly _reservationService:ClientProxy){}
    addReservation = (data)=>this._reservationService.send({cmd:'add_reservation'},data)
}
