import '../../styles/AboutMe.css'
import ImgCat from '../../img/cat.png'
import { ImgContent } from '../atoms/ImgContent'
import { Button } from '../atoms/Button'
import { InfoBox } from '../atoms/InfoBox'
import { CartPresentation } from '../atoms/CartPresentation'
import { BoxPresentation } from '../molecules/BoxPresentation'
import { BioInfo } from '../molecules/BioInfo'
import { Nav } from '../molecules/Nav'

const MoreInfo = [
  {
    text: 'I am Tatiana Abigail, a passionate and creative frontend developer, whose fascination with technology and design merge to create engaging digital  experiences. She has cultivated outstanding skills in implementing modern  solutions using leading technologies such as React and Vue.',
    title: 'Work'
  },
  {
    text: 'My journey into the world of web development began with exploring HTML and CSS in my formative years, and since then, I have constantly evolved to stay abreast  of the latest trends and practices in the industry. I not only program, but I also immerse myself in the creative process of designing  my own pages. This duality of skills allows me to not only understand the logic of the code, but also conceptualize and bring to life visually attractive interfaces.',
    title: 'AboutMe',
    link: 'contact'
  },
  {
    text: 'art, pop music, dogs,spend time with my friends',
    title: 'I like'
  }
]

function AboutMe() {
  return (
    <div className='about-me'>
      <Nav />
      <section className='about-section'>
        <ImgContent img={ImgCat} />
        <CartPresentation />
        <BoxPresentation />

        {MoreInfo.map(info => (
          <div key={info.text}>
            <InfoBox sentence={info.text} title={info.title} />
            <div className={!info.link ? 'inactive' : 'button-content'}>
              <Button link={info.link} name={info.link} />
            </div>
          </div>
        ))}

        <BioInfo />
      </section>
      <section className='copyright'>
        <p>© tatiana abigail, quispe hilario ,Peru</p>
      </section>
    </div>
  )
}

export { AboutMe }
