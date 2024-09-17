import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactFormMail.css';

export const ContactFormMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_swl69w8', 'template_f5ukx59', form.current, {
        publicKey: 'oXcegIxNGe8Et8kve',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form-container">
      <h2 className='contact-header'>Contact Us</h2>
      <form className='form-mail' ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="user_name" id="name" placeholder="Your Name" required />
        
        <label htmlFor="email">Email: </label>
        <input type="email" name="user_email" id="email" placeholder="Your Email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" placeholder="Your Message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactFormMail;
