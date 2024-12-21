import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("orders")
export class Order{
    @PrimaryGeneratedColumn({name:"orders_id",type:"int",unsigned:true})
    ordersId:number
    @CreateDateColumn()
    created_at: Date
    @Column({name:"cars_id",type:"int",unsigned:true,nullable:false})
    carsId:number
    @Column({name:"users_id",type:"int",unsigned:true,nullable:false})
    usersId:number
    @Column({name:"location_start",type:"varchar",length:100,nullable:false})
    locationStart:string
    @Column({name:"car_title",type:"varchar",length:100,nullable:false})
    carTitle:string
    @Column({name:"location_end",type:"varchar",length:100,nullable:false})
    locationEnd:string
    @Column({name:"start_date",type:"datetime",nullable:false})
    startDate:Date
    @Column({name:"end_date",type:"datetime",nullable:false})
    endDate:Date

    @Column({name:"date_expire_license",type:"datetime",nullable:false})
    dateExpireLicense:Date
}