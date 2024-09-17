import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ConsultForm from '../components/ConsultForm';
import ConsultHistory from '../components/ConsultHistory';
import Whitebox from '../components/Whitebox'

function Shop() {
  return (
    <>
      <div className='divbox'>
        < Whitebox  />
        <Header />
        <Navbar />
        <main>
          <ConsultForm />
          <ConsultHistory />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Shop;
