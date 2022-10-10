import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bl7hyx7','template_q2qn80i', form.current, 'YxH6AkuSuvlJSVvGV')

    e.target.reset()
  };
  return (
    <section id ='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        {/*
         <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>pehshermaine@gmail.com</h5>
            <a href='mailto:pehshermaine@gmail.com' target="_blank">Send an Email</a>
          </article>

          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+65 9859 0836</h5>
            <a href='https://api.whatsapp.com/send?phone=6598590836' target="_blank">Send a Message</a>
          </article>
        </div> 
        */}
        {/*END OF CONTACT OPTION */}
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name = "name" placeholder = "Your Full Name" required />
          <input type = "email" name = "email" placeholder = "Your Email" required />
          <textarea name = "message" rows = "?" placeholder = "Your Message" required ></textarea>
          <button type = "submit" className='btn btn-primary'>Send Email</button>
        </form>
      </div>
    </section>
  )
}

export default Contact