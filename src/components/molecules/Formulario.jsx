import { useState } from 'react'
import '../../styles/Formulario.css'
import { Nav } from '../molecules/Nav'
import { CallData } from '../../http'


function Formulario(){
    const [email,setEmail]= useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage]= useState('')
  
    const [notificationBox,setNotificationBox] = useState(false)
 
    const read = (e)=>{
     e.preventDefault()
     CallData(email,subject,message)
     setNotificationBox(true)
    }
    const cancel=()=>{
     setEmail('')
     setSubject('')
     setMessage('')
     setNotificationBox(false)
    }

    return(
        <>
            <Nav />
            <section className='articles'>
            <article className='sendEmail'>
                <form className='sendEmail_form' onSubmit={read}>
                    <h2 className='sendEmail_title'>Contact Me!</h2>
                    <section className='sendEmail_correo sendEmail-space'>
                       <p className='sendEmail_text'>email:</p>
                       <input className='sendEmail_input' id="email" type="text" name="email"  required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </section>
                    <section className='sendEmail_subject sendEmail-space'>
                       <p className='sendEmail_text'>subject:</p>
                       <input className='sendEmail_input' type="text" name="subject" value={subject} required onChange={(e)=>{setSubject(e.target.value)}} />
                    </section>
                    <section className='sendEmail_message sendEmail-space'>
                       <p className='sendEmail_text'>message:</p>
                       <textarea name="message" className="box_message" value={message} required onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                    </section>

                    <input className='sendEmail_input_button' type="submit" />     
                </form>
                     
            </article>
            <articles className={`notification_shallow_box ${!notificationBox && 'inactive'}` }>
                 
                    <div className='notification_box'>
                        <h3 className='notification_text'>Message Send</h3>
                        <button className='notification_button' onClick={cancel}>go back</button>
                    </div>
            </articles>
            </section>
        </>

    )
}


export {Formulario}