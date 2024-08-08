import '../../styles/Main.css'
import { Button } from "../atoms/Button"
import { ImgContent } from '../atoms/ImgContent'
import { InfoBox } from '../atoms/InfoBox'
const info= {
    title:'About Me',
    text:`Hello, I am Tatiana Abigail and I am a frontent developer.
    worked with javascript for web page development
    and also using libraries and frameworks like react or vue
    I also manage the styles and designs of my web pages`,
}

function Main({children}) {
    return(
    <div className="Main-container">
        <section className='article-container'>
                <ImgContent style={'image_cart'}/>
                <div className="description">
                    <InfoBox sentence={info.text} title={info.title}/>
                    <Button name="More" link="about" />
                </div>         
        </section>
        <section>
        {children}
        </section>

    </div>
    )
}

export {Main}