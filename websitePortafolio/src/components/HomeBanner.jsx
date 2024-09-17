import React from 'react';
import '../styles/HomeBanner.css';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/javascript.png';

const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Transformative Customer Experiences </h1>
        <br />
        <p className="banner-subtitle">We build brands and websites for companies focused on building the ultimate customer journey.</p>
      </div>
      <div className="technology-strip">
        <div className="technology-logos">
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={reactLogo} alt="React" />
          <img src={jsLogo} alt="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
