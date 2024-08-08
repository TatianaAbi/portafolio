import { Link } from "react-router-dom"
import "../../styles/button.css"

function Button({link,name}){
    return(
          <Link to={`/${link}`} className="btn center-item">{name}</Link>
    )
}

export {Button}