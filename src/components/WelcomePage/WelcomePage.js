import React from 'react';
import Typical from 'react-typical';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div id={'Home'} className="jumbotron text-center mt-0 welcome_page mb-0">
      <div className="">
        <p className="hero-greeting animate__animated animate__fadeInDown">
          Hello, I&apos;m
        </p>
        <h1 className="display-3 hero-name animate__animated animate__zoomInDown">
          Watson Agbramu
        </h1>
        <div className="hero-typing animate__animated animate__bounceInUp animate__delay-1s">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Senior Software Engineer.',
              2000,
              'Data Platform Engineer.',
              2000,
              'AI / ML Engineer.',
              2000,
              'Distributed Systems Builder.',
              2000,
            ]}
          />
        </div>
        <div
          style={{ zIndex: '5' }}
          className="bbbb animate__fadeInUp animate__animated animate__delay-2s"
        >
          <a href="#About" className="hero-btn">Get to know me</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
