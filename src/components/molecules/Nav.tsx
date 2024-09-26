import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Nav.css'

function Nav() {
  return (
    <div className='options'>
      <div className='options_view'>
        <div>
          <h2 className='options_title'>Tatiana Abigail</h2>
        </div>

        <div className='info-options'>
          <Link className='nav-links' to='/'>
            Home
          </Link>
          <Link className='nav-links' to='/about'>
            About
          </Link>
          <Link className='nav-links' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Nav }
