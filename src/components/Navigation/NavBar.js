import React from 'react';
import resume from '../../static/Resume.pdf';
import './Navigation.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top watson-nav">
      <div className="container">
        <a className="navbar-brand watson-brand" href="#Home">
          WA<span>.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto nav-links">
            <li className="nav-item">
              <a className="nav-link watson-link" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link watson-link" href="#Profile">Profile</a>
            </li>
          </ul>
          <ul className="navbar-nav nav-socials">
            <li className="nav-item">
              <a href="https://github.com/wittywatz" target="_blank" rel="noopener noreferrer" className="nav-icon">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/watson-agbramu/" target="_blank" rel="noopener noreferrer" className="nav-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="mailto:watsonagbramu@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-resume-btn">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
