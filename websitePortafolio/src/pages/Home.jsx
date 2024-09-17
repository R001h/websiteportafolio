import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Whitebox from '../components/Whitebox'
import HomeBanner from '../components/HomeBanner'
import HomeSecondBanner from '../components/HomeSecondBanner'

function Home() {
  return (
    <>
      <div className='divbox'>
        < Whitebox  />
        <Header />
        <main>
         <HomeBanner /> 
         <HomeSecondBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
