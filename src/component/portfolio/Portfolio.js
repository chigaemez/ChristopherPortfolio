import React , {useState} from 'react'
import image from './Screenshot.png'
import images from './Screenshot3.png'
import {FaTimes} from 'react-icons/fa'
import './Portfolio.css'

const Portfolio = () => {

  const [imagess, setImage] = useState(false)
  const [selectedImage, setSelectedImages] = useState(image[0])
  return (
    <div className='container portfolio' id ='Portfolio' >
      <header className='header'>My portfolio</header>
      {

        


      <div className="portfolio-holder ">
        <div className="holders" onClick={() => setImage(!imagess)}>
          <img src={image} alt="" onClick={() => setSelectedImages(image)}/>
          <p><a href="https://app.oneport365.com" target={'_blank'}>https://app.oneport365.com</a></p>
        </div>
        <div className="holders" onClick={() => setImage(!imagess)}>
          <img src={images} alt="" onClick={() => setSelectedImages(images)}/>
          <p><a href="http://localhost:3001/" target={'_blank'}>https://ReactShoppingCart.com</a></p>
        </div>
        <div className="holders" onClick={() => setImage(!imagess)}>
          <img src={image} alt="" onClick={() => setSelectedImages(image)}/>
          <p><span></span><a href="http://app.oneport365.com" target="_blank" rel="noopener noreferrer">https://app.oneport365.com</a></p>
        </div>
       
      </div>
      }

      {
        imagess &&
        <div className="big-image container">
          <div className='holds'>
          <FaTimes className='close' onClick={() => setImage(!imagess)}/>
          <img src= {selectedImage} alt="" />

          </div>
        </div>
      }
    </div>
  )
}

export default Portfolio
