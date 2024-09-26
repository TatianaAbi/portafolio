import React from 'react'
import '../../styles/ImgContent.css'
import DefaultImg from '../../img/default.png'
import { propsImg } from '../interfaces'

function ImgContent({ img, style }:propsImg) {
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
