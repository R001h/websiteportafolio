import React from 'react';
import Gps from '../components/gps';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFormMail from '../components/ContactFormMail';
import Whitebox from '../components/Whitebox'

function Contact() {
  return (
    <div>
    < Whitebox/>
    <Navbar />
    <ContactFormMail  />
    <Gps />
    <Footer />
    </div>
  )
}

export default Contact;