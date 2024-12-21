import * as Validator from "class-validator"

enum categoryEnum {auto='automobil',suv='suv',putnickikombi='putnicki kombi'}
enum fuelEnum {gas='gas',benzin='benzin',dizel='dizel'}
enum transmissionEnum {automatik='automatik',manuelni='manuelni'} 
export class EditCarDto{
    @Validator.IsNotEmpty()
    brand:string
    @Validator.IsNumber()
    price:number
    @Validator.IsEnum(categoryEnum)
    category:'automobil'|'suv'|'putnicki kombi'
    @Validator.IsEnum(fuelEnum)
    fuel:'gas'|'benzin'|'dizel'
    @Validator.IsEnum(transmissionEnum)
    transmission:'automatik'|'manuelni'
    @Validator.IsNumber()
    mileage:number
    @Validator.IsBoolean()
    is_available:boolean
    
}
