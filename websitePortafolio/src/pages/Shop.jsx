import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductDisplay from '../components/ProductsDisplay';
import Whitebox from '../components/Whitebox'

function Shop() {
  return (
    <>
      <div className='divbox'>
        < Whitebox  />
        <Header />
        <Navbar />
        <main>
          <ProductDisplay />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Shop;
