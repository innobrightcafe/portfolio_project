import React from 'react'
import { useRef } from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_maoorig', 'template_vq1bc2r', form.current, 'WOgwrMLaTOqeFdzyU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>info@inosoft.tech</h5>
            <a href="mailto:info@inosoft.tech">Send Email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Reach me on Facebook</h5>
            <a href="https://m.me/innobrightx" target='_blank'>Send A Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348117799975</h5>
            <a href="https:whatsapp.com/send+2348117799975" target='_blank' >Whatsapp me</a>
          </article>
        </div>
        {/** End of Contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Full Name' required />
          <input type="phone" name='phone' placeholder='Enter Phone Number' required/>
          <input type="email" name='email' placeholder='Enter Your Email' required/>
          <select name="services" required>
          <option value="select">Select A Service</option>
          <option value="web">Web Design</option>
          <option value="mobile">Mobile App</option>
          <option value="content">Content Writing</option>
          <option value="app">Web App</option>
          </select>

          <textarea name="message" rows="7" placeholder='Enter Some Messages' required></textarea>
          <button type='submit' className='btn2 btn2-primary '>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact