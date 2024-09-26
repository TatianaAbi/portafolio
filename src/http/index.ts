import { dataType } from '../components/interfaces'

async function CallData(email:string, subject:string, message:string) {
  const formInfo:dataType = {
    email: email,
    subject: subject,
    message: message,
  }

  await fetch('http://localhost:3010/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formInfo),
  })
}

export { CallData }
