import React from 'react';
import '../styles/Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar';
import ConsultForm from '../components/ConsultForm';
import ConsultHistory from '../components/ConsultHistory';



function Home() {

  return (
    <>
      <div className='divbox' >

      <Header />
      <Navbar />
      <ConsultForm />
      <ConsultHistory />

      <Footer />
       
       
       </div>
    </>
  )
}



export default Home;
