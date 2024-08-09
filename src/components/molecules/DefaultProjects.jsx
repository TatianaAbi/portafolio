import { ImgContent } from '../atoms/ImgContent'

import CatImg from '../../img/cat.png'

import '../../styles/DefaultProjects.css'

function DefaultProjects() {
  return (
    <div className='container-info'>
      <ImgContent img={CatImg} />
      <p className='default_margin'>Some of my projects...</p>
    </div>
  )
}
export { DefaultProjects }
