import { Link } from "react-router-dom"
import '../styles/Nav.css'
//


function Nav() {
    return(
    <div className="container-options">
          <div className='options'>
              <div>
                  <h2>Tatiana Abigail</h2>
              </div>
  
              <div className="info-options">
                  <Link className="NavLinks" to="/">Home</Link>
                  <Link className="NavLinks" to="/about">About</Link>
                  <Link className="NavLinks" to="/contact">Contact</Link>
                  
              </div>
          </div>
    </div>
    )
}

export {Nav}