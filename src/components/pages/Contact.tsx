import React from 'react'
import { Nav } from '../molecules/Nav'
import '../../styles/Contact.css'
import { SocialLinksContainer } from '../molecules/SocialLinksContainer'
import { InfoBox } from '../atoms/InfoBox'
import { ImgContent } from '../atoms/ImgContent'
import { Button } from '../atoms/Button'

function Contact() {
  return (
    <div className='contact'>
      <Nav />
      <article className='contact-info'>
        <ImgContent
          img={'https://cdn-icons-png.flaticon.com/512/7745/7745954.png'}
        />

        <div className='container-info'>
          <InfoBox
            title='Social Networks'
            sentence='i like this social network'
          />
          <SocialLinksContainer />
        </div>
        <Button link='email' name='message' />
      </article>
    </div>
  )
}

export { Contact }
