import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Whitebox from '../components/Whitebox'
import HomeBanner from '../components/HomeBanner'
import HomeSecondinfo from '../components/HomeSecondinfo'
import HomeSeBannerImg from '../components/HomeSeBannerImg'
import HomeThirdBanner from '../components/HomeThirdBanner';

function Home() {
  return (
    <>
      <div className='divbox'>
        < Whitebox  />
        <Header />
        <main>
         <HomeBanner /> 
         <HomeSeBannerImg/> 
         <HomeSecondinfo />
         <HomeThirdBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
