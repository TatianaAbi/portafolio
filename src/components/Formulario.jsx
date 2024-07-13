import { useState } from 'react'
import '../styles/Formulario.css'
import { Nav } from './Nav'
import { CallData } from '../http'


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
        <div >
            <Nav />
            <section className='articles'>
            <article className='formulario-container'>
                <form className='formulario' onSubmit={read}>
                    <h2>Contact Me!</h2>
                    <section className='correo'>
                       <p>email:</p>
                       <input type="text" name="email" id="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </section>
                    <section className='subject'>
                       <p>subject:</p>
                       <input type="text" name="subject" id="" value={subject} required onChange={(e)=>{setSubject(e.target.value)}} />
                    </section>
                    <section className='message'>
                       <p>message:</p>
                       <textarea name="message" id="textera" value={message} required onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                    </section>
                    <input type="submit" className='buttonSubmit'/>     
                </form>
                     
            </article>
            <div className={`notification ${!notificationBox && 'inactive'}` }>
                 <div className='notification-box'>
                    <div>
                        <h3>Message Send</h3>
                        <button onClick={cancel}>go back</button>
                    </div>
                    
                 </div>
            </div>
            </section>
        </div>

    )
}


export {Formulario}