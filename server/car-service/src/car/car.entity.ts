import { Comment } from "src/comment/comment.entity";
import { Registration } from "src/registration/registration.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars')
export class Car{
    @PrimaryGeneratedColumn({name:'cars_id',type:'int',unsigned:true})
    carsId:number
    @CreateDateColumn()
    created_at: Date
    @Column({name:'brand',type:'varchar',length:100,nullable:false})
    brand:string
    @Column({name:'image_path',type:'varchar',length:100,nullable:false})
    imagePath:string
    @Column({name:'price',type:'int',unsigned:true,nullable:false})
    price:number
    @Column({name:'category',type:"enum",enum:['automobil','suv','putnicki kombi'],nullable:false})
    category:string
    @Column({name:'fuel',type:"enum",enum:['gas','benzin','dizel'],nullable:false})
    fuel:string
    @Column({name:'transmission',type:"enum",enum:['automatik','manuelni'],nullable:false})
    transmission:string
    @Column({name:'mileage',type:'int',unsigned:true,nullable:false})
    mileage:number
    @Column({name:'is_available',type:'tinyint',default:true})
    is_available:boolean
    @OneToMany(()=>Registration,registration=>registration.carsId)
    registrations:Registration[]
    
    @OneToMany(()=>Comment,comment=>comment.carsId)
    comments:Comment[]
}