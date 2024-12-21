import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('')
export class AuthController {
    constructor(private readonly _authService:AuthService){}
    @Post()
    login(@Body() body:LoginDto){
        return this._authService.signIn(body)
    }
}
