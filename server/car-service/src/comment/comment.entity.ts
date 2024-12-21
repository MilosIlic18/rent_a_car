import { Car } from "src/car/car.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity('comments')
export class Comment{
    @PrimaryGeneratedColumn({name:'comments_id',type:'int',unsigned:true})
    commentsId:number
    @CreateDateColumn()
    created_at:Date
    @Column({name:'users_id',type:'int',nullable:false})
    usersId:number
    @Column({name:'description',type:'text',nullable:false})
    description
    @ManyToOne(()=>Car,car=>car.comments,{nullable:false})
    @JoinColumn({name :"cars_id"})
    carsId:number
}