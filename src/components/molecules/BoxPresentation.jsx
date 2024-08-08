import { ImgContent } from "../atoms/ImgContent"
import '../../styles/BoxPresentation.css' 

function BoxPresentation(){
    return(
        <div className="presentation">
            <div className="Myname">
                <h2 className="presentation_title">tatiana abigail</h2>
                <p className="presentation_sentence">(frontent development)</p>
            </div>
            <ImgContent style={'image_circule min'}  />
        </div>
    )
}export {BoxPresentation}