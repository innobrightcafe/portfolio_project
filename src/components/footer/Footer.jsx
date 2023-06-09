import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Inosoft Tech</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact Me</a></li>

      </ul>
      
      <div className='footer__socials'>
        <a href="https://facrbook.com"><FaFacebookF/></a>
        <a href="http://istagram.com"><FiInstagram/></a>
        <a href="http://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyrigh">
        <small>&copy;Inosoft Tech. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer