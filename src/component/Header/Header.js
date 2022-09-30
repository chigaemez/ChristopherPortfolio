import React from 'react'
import { Link } from 'react-scroll'
import Image from './IMG-20220726-WA0002.jpg'

import './Header.css'



const Header = () => {


    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Image} alt="CZAR" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item text-end">
                                <Link to="Hero" spy={true} smooth={true} offset={-130} duration={500} className='nav-link'> Home</Link>
                            </li>
                            <li className="nav-item text-end">
                                <Link to="About" spy={true} smooth={true} offset={-110} duration={500} className='nav-link' > About</Link>
                            </li>
                            <li className="nav-item text-end">
                                <Link to="Portfolio" spy={true} smooth={true} offset={-130} duration={500} className='nav-link'>Portfolio</Link>
                            </li>
                            <li className="nav-item text-end">
                                <Link to="Services" spy={true} smooth={true} offset={-130} duration={500} className='nav-link'> Services</Link>
                            </li>
                            <li className="nav-item text-end">
                                <Link to="Contact" spy={true} smooth={true} offset={-110} duration={500} className='nav-link contact' > Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
