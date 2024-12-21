import { Controller, Get, Param, Res,  } from '@nestjs/common';
import { Response } from 'express';
import { IMAGECONFIG } from 'src/config/config';

@Controller('')
export class SharedController {
   
    @Get(':id')
    async getPicture(@Param('id') id,@Res() res:Response){
        res.sendFile(id,{root:IMAGECONFIG.dest})
        
    }
}
