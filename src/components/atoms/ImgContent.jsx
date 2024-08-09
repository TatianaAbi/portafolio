import DefaultImg from '../../img/default.png'

import '../../styles/ImgContent.css'

function ImgContent({ img, style }) {
  return (
    <picture className='image'>
      <img
        className={`${style ?? 'image_width--default'}`}
        src={img ?? DefaultImg}
        alt='img'
      />
    </picture>
  )
}

export { ImgContent }
