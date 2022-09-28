import React from 'react'
import image from './Screenshot.png'
import images from './Screenshot3.png'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='container portfolio' id ='Portfolio' >
      <header className='header'>My portfolio</header>
      <div className="portfolio-holder ">
        <div className="holders">
          <img src={image} alt="" />
          <p><a href="https://app.oneport365.com" target={'_blank'}>https://app.oneport365.com</a></p>
        </div>
        <div className="holders">
          <img src={images} alt="" />
          <p><a href="http://localhost:3001/" target={'_blank'}>https://ReactShoppingCart.com</a></p>
        </div>
        <div className="holders">
          <img src={image} alt="" />
          <p><span></span><a href="http://app.oneport365.com" target="_blank" rel="noopener noreferrer">https://app.oneport365.com</a></p>
        </div>
       
      </div>
    </div>
  )
}

export default Portfolio
