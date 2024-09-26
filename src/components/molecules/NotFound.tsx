import { ImgContent } from '../atoms/ImgContent'
import notFound from '../../img/404.png'

function NotFound() {
  return (
    <div className='container-info'>
      <ImgContent img={notFound} />
    </div>
  )
}

export { NotFound }
