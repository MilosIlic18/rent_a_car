import * as Validator from "class-validator"

export class RegisterUserDto{
    @Validator.IsString()
    @Validator.IsNotEmpty()
    firstname : string
    @Validator.IsString()
    @Validator.IsNotEmpty()
    lastname  : string
    @Validator.IsNumberString()
    @Validator.IsNotEmpty()
    @Validator.Length(13)
    uid       : string
    @Validator.IsNumberString()
    @Validator.IsNotEmpty()
    @Validator.Length(10)
    phone     : string
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email     : string
    @Validator.IsString()
    @Validator.IsNotEmpty()
    password  : string
}