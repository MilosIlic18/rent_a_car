import { Body, Controller, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('')
export class ReservationsController {
    constructor(private readonly _reservationService:ReservationsService){}
    @Post()
    addReserve(@Body() data){
        return this._reservationService.addReservation(data)
    }
}
