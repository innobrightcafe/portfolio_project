import React from 'react'
import './about.css'
import ME from '../../assets/m.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { BsFillFolderSymlinkFill, } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const about = () => {
  return (
    <section id='about'>
      <h5>Want To Know</h5>
      <h2>About Me?</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About innocent"/>
          </div>

        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small>5+ Yrs Working Experience</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5> Clients</h5>
              <small>500+ happy clients worldwide</small>
            </article>

            <article className='about__card'>
              <BsFillFolderSymlinkFill className='about__icon'/>
              <h5> Projects</h5>
              <small>50+ Done and dusted projects</small>
            </article> 

          </div>
          <p>
          I am a seasoned Full Stack Software Engineer with five years of professional 
          experience in the field. Throughout my career, I have had the privilege of 
          working with over 100 clients worldwide, delivering innovative and reliable 
          solutions to their software needs.
          My expertise lies in developing end-to-end applications, from conceptualization to 
          implementation and deployment. I possess a deep understanding of both front-end 
          and back-end technologies, enabling me to create seamless and robust user experiences. 
          I am well-versed in programming languages such as C, JavaScript, Python, PHP, and Java,
          and have a solid foundation in modern frameworks and libraries.
          </p> 
          <p>
            <a href="#readmore" className='read__more'>Read more</a>
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk On Whatsapp<BsWhatsapp className='about__iconw'/></a>

        </div>
      </div>
    </section>
  )
}

export default about