import { Controller } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { ApiResponse } from 'src/misc/api.response';
import { OrderService } from '../services/order.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
    constructor(private readonly _orderService:OrderService){}

    @MessagePattern({cmd:'add_reservation'})
    create(@Payload() data):Promise<Order|ApiResponse>{
        const dateValideLincense = ((new Date(data.data.dateExpireLicense).getTime()-new Date(Date.now()).getTime())/(1000 * 60 * 60 * 24))
        if(dateValideLincense<15) {return Promise.resolve(new ApiResponse("error",-121,"Lincense expire"))}
        return this._orderService.save(data)
    }

    @MessagePattern({cmd:'all'})
    all():Promise<Order[]>{
        return this._orderService.findAll()
    }
    
    @MessagePattern({cmd:'user_all_reservation'})
    allByUser(id:number):Promise<Order[]>{
        return this._orderService.findByUser(id)
    }

    @MessagePattern({cmd:'search'})
    search(@Payload() data){
        return this._orderService.search(data)
    }
    
}
