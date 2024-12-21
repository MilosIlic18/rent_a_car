import * as Validator from "class-validator"
export class SaveRegistrationDto{
    carsId:number
    @Validator.IsNotEmpty()
    startDate:Date
    @Validator.IsNotEmpty()
    expireDate:Date
}