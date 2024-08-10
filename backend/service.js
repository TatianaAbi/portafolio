import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()


class ServiceEmail {
    constructor(){}

    sendMessage(email,subject,message){
      const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'lg3165777@gmail.com',
            pass: process.env.PASSWORD
        }
      })

      const htmlRead = `
          <section>
            <article>
              <h2>tienes un nuevo mensaje de tu portafolio</h2>
              <div>
                <h4>de:</h4>
                <p>${email}</p>
              </div>
              <div>
                <h4>asunto:</h4>
                <p>${subject}</p>
              </div>
              <div>
                <h4>mensaje:</h4>
                <p>${message}</p>
              </div>
            </article>
          </section>`

      const info = {
        from:email,
        to:'lg3165777@gmail.com',
        subject:subject,
        text:message,
        html:htmlRead,
      }
      const sendInfo = transport.sendMail(info,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log('message '+ info.response)
        }
      })
      return sendInfo
    }
    
}

export {ServiceEmail}