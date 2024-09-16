import React from 'react';
import '../styles/Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import  ServiciosCard from '../components/ServiciosCard'

function Services () {

  return (
    <>
      <Header />
      <div >
      <ServiciosCard />
      </div>
      <br />
      <br />
      <Footer />
    </>
  )
}



export default Services;
