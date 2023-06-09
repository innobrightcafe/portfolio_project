import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/m.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey I'm</h5>
        <h1>Inosoft</h1>
        <h5 className='text-light'> A Full Satck Developer </h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className='me'>
        <img src={ME} alt="me"/>

        </div>
        <a href="#contact" className='scroll__down'> Click To Go Down</a>
      </div>


    </header>
    
  )
}

export default header