import { Button } from '../atoms/Button'

import '../../styles/HeaderInfo.css'

function HeaderInfo() {
  return (
    <div className='header-info'>
      <p className='title'>hello</p>
      <h2 className='my-name'>I am Tatiana</h2>
      <p className='sentence'>Frontend Web Designer & Developer</p>
      <Button name={'MORE'} link={'about'} />
    </div>
  )
}

export { HeaderInfo }
