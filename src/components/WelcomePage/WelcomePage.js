import React from 'react';
import Typical from 'react-typical';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div id={'Home'} className="jumbotron text-center mt-0 welcome_page mb-0 ">
      <div className="">
        <h1 className="display-3 text-white animate__animated animate__zoomInDown">
          Hi, I'm <span style={{ color: '#42f55d' }}>Watson Agbramu</span>
        </h1>
        <h3 className="text-white mb-5 animate__animated animate__bounceInUp animate__delay-1s">
          <span> I am </span>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'an Engineer.',
              2000,
              'a Web Developer.',
              2000,
              'a Data Analyst.',
              2000,
              'a Machine Learning Engineer.',
              2000,
            ]}
          />
        </h3>
        <div
          style={{ zIndex: '5' }}
          className="bbbb animate__fadeInLeft animate__animated animate__delay-2s"
        >
          <button className="">
            <a className="" href="#About">
              <span style={{ color: '#42f55d' }}>Get to know me</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
