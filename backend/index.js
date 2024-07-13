import express from "express"
import { ServiceEmail } from "./service.js"
import cors from 'cors'

const app = express()
const PORT = 3010
const service = new ServiceEmail()
const whitelist = ['http://localhost:5173']

const options = {
  origin:(origin,callback)=>{
      if(whitelist.includes(origin) || !origin){
        callback(null,true)
      }else{
        callback(new Error('la direccion no tiene permisos'))
      }
  }
}
app.use(express.json())

app.use(cors(options))


app.post('/send',async(req,res)=>{
    const {email,subject,message} = req.body
    const send = await service.sendMessage(email,subject,message)
    
    res.send(send)
})


app.listen(PORT,()=>{
    console.log(PORT)
})