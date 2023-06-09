import React from 'react'
import CV from '../../assets/cv.PDF'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download My Resume</a> 
        <a href="#contact" className='btn btn-primary'>Write Me A Message</a>
    </div>
  )
}

export default CTA