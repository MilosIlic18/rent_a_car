import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user')
export class UserController {
    constructor(private readonly _userService:UserService){}
    @MessagePattern({cmd:"users"})
    getAllUsers(){
        return this._userService.findAllUsers()
    }
    @MessagePattern({cmd:"user_by_uid"})
    getUserByUID(uid){
        return this._userService.findUserByUID(uid)
    }
}
