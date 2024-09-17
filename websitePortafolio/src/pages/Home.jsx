import React from 'react';
import '../styles/Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner';
import HomeSecondBanner from '../components/HomeSecondBanner';


function Home() {

  return (
    <>
      <Header />
      <br />
      <HomeBanner />
      <HomeSecondBanner />
      <Footer />
    </>
  )
}



export default Home;
