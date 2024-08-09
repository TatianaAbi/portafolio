import { useParams } from 'react-router-dom'

import { portfolioData } from '../portfolioData.js'
import { ImgContent } from '../atoms/ImgContent.jsx'
import { InfoBox } from '../atoms/InfoBox.jsx'

import '../../styles/Projects.css'

function Projects() {
  const { slug } = useParams()
  const blogData = portfolioData.find(post => post.slug === slug)

  return (
    <div className='carousel'>
      {blogData.projects.map((project, index) => (
        <div className='element' key={index}>
          <picture className='project_images'>
            <ImgContent style='project_image' img={project.img} />
          </picture>

          <div className='project-description'>
            <InfoBox sentence={project.text} title={project.title} />
          </div>
        </div>
      ))}
    </div>
  )
}

export { Projects }
