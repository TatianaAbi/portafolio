import { Nav } from "./Nav"
import "../styles/Contact.css"
import { SocialLinksContainer } from "./SocialLinksContainer";
import { InfoBox } from "./InfoBox";
import { ImgContent } from "./ImgContent";
import { ContainerInfo } from "./ContainerInfo";
import { Button } from "./Button";

function Contact() {
    return(
        <>
         <Nav />
        <div className="contact">
            <article>
                <ImgContent img={'https://cdn-icons-png.flaticon.com/512/7745/7745954.png'} />

                <ContainerInfo>
                    <InfoBox title='Social Networks' sentence='i like this social network' styleContainer='center' />
                    <SocialLinksContainer />
                    
                </ContainerInfo>
                <Button link="email" name='message'/>
                
            </article>
        </div>
        </>
    )
}

export {Contact}