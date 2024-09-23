import React from 'react';
import '../styles/Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import  ServiciosCard from '../components/ServiciosCard'
import Whitebox from '../components/Whitebox'
import ServicesBanner from '../components/ServicesBanner';
import ContactFormMail from '../components/ContactFormMail';

function Services () {

  return (
    <>
      < Whitebox  />
      <Header />
      <div >
      <ServicesBanner />
      <ServiciosCard />
      </div>
      <br />
      <ContactFormMail  />
      <br />
      <Footer />
    </>
  )
}



export default Services;
