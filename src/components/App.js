import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

import NavBar from './Navigation/NavBar';
import WelcomePage from './WelcomePage/WelcomePage';
import AboutPage from './AboutPage/AboutPage';
import Footer from './Footer/Footer';
import ProfileSection from './ProfileSection/ProfileSection';
import Project from './Projects/Project';

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
  },
};

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Particles className="particles" params={particleOptions} />
        <NavBar />
        <WelcomePage />
        <AboutPage />
        <ProfileSection />
        <Project />
        <Footer />
      </div>
    );
  }
}
