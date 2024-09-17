import React from 'react';
import '../styles/Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner';
import HomeSecondBanner from '../components/HomeSecondBanner';
import Whitebox from '../components/Whitebox'


function Home() {

  return (
    <>
      < Whitebox />
      <Header />
      <br />
      <HomeBanner />
      <HomeSecondBanner />
      < Whitebox />
      <Footer />
    </>
  )
}



export default Home;
