export class EditCarDto{
    brand:string
    price:number
    category:'automobil'|'suv'|'putnicki kombi'
    fuel:'gas'|'benzin'|'dizel'
    transmission:'automatik'|'manuelni'
    mileage:number
    location:string
    is_available:boolean
}