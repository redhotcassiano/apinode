const nodemailer = require('nodemailer')

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "531358d981aee9",
        pass: "118c0be95d226f"
    }
})

export default (from, to, subject, text) => {
    let options = {
        from: from,
        to: to,
        subject: subject,
        text: text
    }

    transport.sendMail(options, (error, info)=>{
        if(error){
            console.log('Error: ', error);
        }

        console.log('Mensagem enviada: ', info);
    })
}





