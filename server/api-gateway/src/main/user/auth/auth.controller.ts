import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dtos/register.user.dto';
import { LoginUserDto } from './dtos/login.user.dto';

@Controller('')
export class AuthController {
    constructor(private readonly _authService:AuthService){}
    @Post()
    signUp(@Body() data:RegisterUserDto){
        return this._authService.signUp(data)
    }
    @Post('user')
    signIn(@Body() data:LoginUserDto){
        return this._authService.singIn(data)
    }
}
