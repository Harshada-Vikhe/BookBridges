import React, { useRef } from 'react'
import './Footer.styles.css'
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form= useRef();
   const serviceId = 'service_c0qhfiv';
  const templateId='template_7vuv6vi';
  const publicKey ='L1X3sJB8irrbUXqN1';

  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm(serviceId,templateId,form.current,publicKey)
    .then((response)=>{
      console.log(response.text);
    })
    .catch((error)=>{
      console.log(error.text);
    })
    e.target.reset();
  }

  return (
    <section className='footer-container'>
       <div className='container'>
        <h2>If you have any queries feel free to ask here.</h2>
       
        <form onSubmit={handleSubmit} ref={form} className='footer-form'>
            <div className='form-group'>
                <label htmlFor='name' className='form-label'>Name: </label>
                <input type='text'name='user_name' id='name' className='form-input' placeholder='Enter Your Name'/>
            </div>
            <div   className='form-group'>
            <label htmlFor='email' className='form-label'>Email: </label>
                <input type='email' name='user_email' id='email' className='form-input' placeholder='Enter Your Email'/>
            </div>

            <div className='form-group'>
            <label htmlFor='query' className='form-label'>Query:</label>
               <textarea className='form-input' name='message' id='query' placeholder='Type Your Query'></textarea>
            </div>

            <div className='form-group'>
              <input type='submit' value='Submit' className='form-submit'/>
            </div>
        </form>
        <p>&copy;2024 BookBridges. All Rights Reserved. </p>
       </div>
    </section>
  )
}

export default Footer