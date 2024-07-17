

async function CallData (email,subject,message){

    const formInfo = {
        email:email,
        subject:subject,
        message:message
    }

    await fetch('http://localhost:3010/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formInfo)
    })
    
}

export {CallData}