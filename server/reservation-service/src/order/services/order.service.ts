import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { OrderMailerService } from './order-mailer.service';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private readonly _orderRepo:Repository<Order>,private readonly _orderMail:OrderMailerService){}
    async save(data:any):Promise<Order>{
        const order = new Order()
        order.usersId           = data.data.usersId
        order.carsId            = data.car.carsId
        order.locationStart     = data.data.locationStart
        order.carTitle          = data.car.brand
        order.locationEnd       = data.data.locationEnd
        order.startDate         = data.data.startDate
        order.endDate           = data.data.endDate
        order.dateExpireLicense = data.data.dateExpireLicense
        const reserveCar = await this._orderRepo.save(order)
        await this._orderMail.sendOrderEmail(data)
        return reserveCar
    }
    findAll = ():Promise<Order[]>=>this._orderRepo.find()
    findByUser = (id):Promise<Order[]>=>this._orderRepo.findBy({usersId:id})
    search = (data):Promise<Order[]>=>this._orderRepo.findBy({locationStart:data.locationStart,locationEnd:data.locationEnd,startDate:data.startDate,endDate:data.endDate})
}
