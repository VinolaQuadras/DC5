import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
         <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
            <div className='container-fluid'>
                <img src="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&width=1200"
            alt="Loading"
            height="50px"
            />
            
                <Link className='navbar-brand' to="/">
                    Story Time
                </Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
       
    </>
  )
}

export default NavBar