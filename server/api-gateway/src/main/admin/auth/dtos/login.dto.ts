import * as Validator from "class-validator"

export class LoginDto{
    @Validator.IsString()
    username:string
    @Validator.IsString()
    password:string
}