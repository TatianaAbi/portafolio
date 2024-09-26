import { ImgContent } from '../atoms/ImgContent'
import '../../styles/BoxPresentation.css'

function BoxPresentation() {
  return (
    <div className='presentation'>
      <div className='my-name'>
        <h2 className='presentation_title'>tatiana abigail</h2>
        <p className='presentation_sentence'>(frontend development)</p>
      </div>
      <ImgContent style={'image_circle min'} />
    </div>
  )
}
export { BoxPresentation }
