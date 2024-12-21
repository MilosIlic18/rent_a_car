import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('administrators')
export class Administrator{
    @PrimaryGeneratedColumn({name:'administrator_id',type:'int',unsigned:true})
    administratorId:number
    @Column({name:'username',type:'varchar',length:100,unique:true,nullable:false})
    username:string
    @Column({name:'password_hash',type:'varchar',length:128,nullable:false})
    passwordHash:string
}