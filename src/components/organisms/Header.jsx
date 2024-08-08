import '../../styles/Header.css'
import { HeaderInfo } from '../molecules/HeaderInfo'
import { ImgContent } from '../atoms/ImgContent'


function Header() {
    return(
     <div className="Header">
        <div className="header-shallow">
          <section className="perfil"> 
                  <div className='article-container'>
                        <ImgContent style={'image_circule max'} /> 
                        <HeaderInfo  />
                  </div>
          </section>   
       </div>
    </div>
    )
}

export {Header}