import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('')
export class CarsController {
    constructor(private readonly carService:CarsService){}
    @Get('')
    availableCar(){
        return this.carService.availableCars()
    }
    @Get(':id/detail')
    singleCar(@Param() id:number){
        return this.carService.singleCar(id)
    }
    @Get('v')
    search(@Query() data:any){
        return this.carService.search(data)
    }
    @Post('comment')
    saveComment(@Body() data:any){
        return this.carService.addComments(data)
    }
}
