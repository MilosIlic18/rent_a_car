import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderMailerService {
    constructor(private readonly _mailerService:MailerService){}
    sendOrderEmail(data){
        this._mailerService.sendMail({
            to:data.data.email,
            bcc:`${process.env.MAIL_NOTIFICATION}`,
            subject:"Podaci o rezervaciji",
            encoding:"UTF-8",
            html:this.makeHtml(data)
        }).then(()=>console.log("Uspesno poslato"))
        .catch(err=>console.log("Problem pri slanju"))
    }
    private makeHtml(data){
        let sum = ((new Date(data.data.endDate).getTime()-new Date(data.data.startDate).getTime())/(1000 * 60 * 60 * 24))*data.car.price
        return `<p>Zahvaljujemo se na uspesnoj rezervaciji.</p>
                <p>Detalji Vase rezervacije:<br/><br/>
                Lokacija i datum preuzimanja vozila: ${data.data.locationStart}, `+
                data.data.startDate.split('T')[0]+' '+data.data.startDate.split('T')[1]+
                `h<br/>Lokacija i datum vracanja vozila: ${data.data.locationEnd}, `+
                data.data.endDate.split('T')[0]+' '+data.data.endDate.split('T')[1]+
                `h
                </p><br/>
                <b>Ukupni troskovi ${sum.toFixed(2)} EUR</b>
        `
    }
}
