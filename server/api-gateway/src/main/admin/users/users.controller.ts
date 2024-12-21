import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('')
export class UsersController {
    constructor(private readonly _userService:UsersService){}
    @Get()
    all(){
        return this._userService.all()
    }
    @Get(':uid')
    byUID(@Param("uid") uid:string){
        return this._userService.byUID(uid)
    }
    @Get(':id/reservations')
    findReservationByUser(@Param("id") id:number){
        return this._userService.findReservationByUser(id)
    }
}
