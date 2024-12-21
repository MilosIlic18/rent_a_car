import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn({name:'users_id',type:'int',unsigned:true})
    usersId:number
    @CreateDateColumn()
    created_at: Date
    @Column({name:'first_name',type:'varchar',length:100,nullable:false})
    firstname:string
    @Column({name:'last_name',type:'varchar',length:100,nullable:false})
    lastname:string
    @Column({type:'varchar',length:100,unique:true,nullable:false})
    uid:string
    @Column({type:'varchar',length:100,nullable:false})
    phone:string
    @Column({type:'varchar',length:100,unique:true,nullable:false})
    email:string
    @Column({name:'password_hash',type:'varchar',length:128})
    passwordHash:string
}