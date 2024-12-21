import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AddUserDto } from './dtos/add.user.dto';
import { ApiResponse } from 'src/misc/api.response';
import { User } from 'src/user/user.entity';
import { LoginUserDto } from './dtos/login.user.dto';
import { LoginDataUserDto } from './dtos/login.data.user.dto';
import * as bcrypt from 'bcryptjs'
import { LoginDataAdminDto } from './dtos/login.data.admin.dto';
import { LoginAdminDto } from './dtos/login.admin.dto';
@Controller('auth')
export class AuthController {
    constructor(private readonly _authService:AuthService){}
    @MessagePattern({cmd:'signUpUser'})
    async registrationUser(@Payload() data:AddUserDto):Promise<User|ApiResponse>{
        const userExistEmail = await this._authService.findUserByEmail(data.email)
        const userExistUID   = await this._authService.findUserByUID(data.uid)
        if(userExistEmail!==null) {return Promise.resolve(new ApiResponse("info",-104,"Email busy"))}
        if(userExistUID!==null) {return Promise.resolve(new ApiResponse("info",-105,"the user UID already exists"))}

        const user = new User()
        user.firstname = data.firstname
        user.lastname  = data.lastname
        user.uid       = data.uid
        user.email     = data.email
        user.phone     = data.phone
        user.passwordHash = await bcrypt.hash(data.password,Number(`${process.env.HASH_NUM}`))
        return this._authService.save(user)
    }
    @MessagePattern({cmd:'signInUser'})
    async loginUser(@Payload() data:LoginUserDto):Promise<LoginDataUserDto|ApiResponse>{
        const userExists = await this._authService.findUserByEmail(data.email)
        if(userExists===null) {return Promise.resolve(new ApiResponse("info",-101,"User notfound"))}
        if(!await bcrypt.compare(data.password, userExists.passwordHash)){return Promise.resolve(new ApiResponse("error",-102,"Password incorrect"))}

        const loginUser     = new LoginDataUserDto()
        loginUser.userId    = userExists.usersId
        loginUser.firstname = userExists.firstname
        loginUser.email     = userExists.email
        return new Promise(resolve=>resolve(loginUser))
    }

    @MessagePattern({cmd:'signInAdmin'})
    async loginAdmin(@Payload() data:LoginAdminDto):Promise<LoginDataAdminDto|ApiResponse>{
        const userExists = await this._authService.findUserByUsername(data.username)
        if(userExists===null) return Promise.resolve(new ApiResponse("info",-101,"User not exists"))
        if(!await bcrypt.compare(data.password, userExists.passwordHash))return Promise.resolve(new ApiResponse("error",-102,"Password incorrect"))
        
        const loginUser              = new LoginDataAdminDto()
        loginUser.administratorId    = userExists.administratorId
        loginUser.username           = userExists.username
        return new Promise(resolve=>resolve(loginUser))
    }
}
