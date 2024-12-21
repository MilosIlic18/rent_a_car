import { Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CarsService } from './cars.service';
import { IMAGECONFIG } from 'src/config/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { EditCarDto } from './dtos/edit.car.dto';
import { diskStorage } from 'multer';
import { SaveCarDto } from './dtos/save.car.dto';
import { SaveRegistrationDto } from './dtos/save.registration.dto';

@Controller('')
export class CarsController {
    constructor(private readonly _carsService:CarsService){}
    @Post()
    @UseInterceptors(
        FileInterceptor('image',{
            storage:diskStorage({
                destination:IMAGECONFIG.dest,
                filename(req, file, cb) {
                    const name = file.originalname.split('.')[0]
                    const ext  = file.originalname.split('.')[1]
                    const newFileName='_'+Date.now()+'.'+ext
                    cb(null,newFileName)
                },
            })
        })
      )
    add(@Body() body:SaveCarDto,@UploadedFile() file: Express.Multer.File){
        body.imagePath = `${IMAGECONFIG.link}${file.filename}`
        return this._carsService.save(body)
    }
    @Post('registrations')
    addRegistration(@Body() body:SaveRegistrationDto){
        return this._carsService.saveRegistration(body)
    }

    @Put(':id')
    edit(@Param('id') id:number,@Body() body:EditCarDto){
        return this._carsService.edit(id,body)
    }

    @Get()
    all(){
        return this._carsService.all()
    }
    @Get('available')
    allAvailable(){
        return this._carsService.allAvailable()
    }

    @Get(':id')
    single(@Param('id') id:number){
        return this._carsService.single(id)
    }
    @Get(':id/registrations')
    registrationsByCar(@Param('id') id:number){
        return this._carsService.findRegistrationsByCarId(id)
    }
    
}
