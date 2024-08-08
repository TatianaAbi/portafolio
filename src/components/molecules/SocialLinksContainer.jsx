import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import '../../styles/LinkContainer.css'


function SocialLinksContainer(){
    return(
    <div className="container-icons">
    <a href="https://github.com/TatianaAbi"> <FaGithub className="icons"/>  </a>
    <a href="https://www.facebook.com/"> <FaFacebook className="icons"/>  </a>
    <a href="https://www.instagram.com/"> <FaInstagram className="icons"/>  </a>
    </div>
    )
}

export {SocialLinksContainer}