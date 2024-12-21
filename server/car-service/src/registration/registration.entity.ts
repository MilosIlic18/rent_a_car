import { Car } from "src/car/car.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('registrations')
export class Registration{
    @PrimaryGeneratedColumn({name:'registrations_id',type:'int',unsigned:true})
    registrationsId:number
    @CreateDateColumn()
    created_at:Date
    @Column({name:'start_date',type:'date',nullable:false})
    startDate:Date
    @Column({name:'expire_date',type:'date',nullable:false})
    expireDate:Date
    @ManyToOne(()=>Car,car=>car.registrations,{nullable:false})
    @JoinColumn({name :"cars_id"})
    carsId:number
}