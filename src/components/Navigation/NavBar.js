import React from 'react';
import homepage from '../images/homepage.png';
import resume from '../../static/Resume.pdf';
import './Navigation.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-0 bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home">
          <img src={homepage} alt="Home" width="30" height="24" />
          <span className="ml-2 navContent" style={{ color: '#42f55d' }}>
            Watson
          </span>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ml-3">
              <a
                className="nav-link navContent"
                href="#About"
                style={{ color: '#42f55d' }}
              >
                About
              </a>
            </li>
            <li className="nav-item ml-3 ">
              <a
                className="nav-link navContent"
                href="#Profile"
                style={{ color: '#42f55d' }}
              >
                Profile
              </a>
            </li>
            <li className="nav-item ml-3">
              <a
                className="nav-link navContent"
                href="#Projects"
                style={{ color: '#42f55d' }}
              >
                Projects
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto links-size">
            <li className="nav-profiles">
              <a
                href="https://github.com/wittywatz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github iconn ml-4"></i>
              </a>
            </li>
            <li className="nav-profiles">
              <a
                href="https://www.linkedin.com/in/watson-agbramu-a37320181/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab ml-4 fa-linkedin-in  iconn "> </i>
              </a>
            </li>
            <li className="nav-profiles">
              <a
                href="https://www.instagram.com/wittywatz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab ml-4 fa-instagram  iconn "></i>
              </a>
            </li>
            <li className="nav-profiles">
              <a
                href="mailto:watsonagbramu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope-open-text  iconn ml-4"></i>
              </a>
            </li>
            <li className="nav-profiles">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <i className=" far fa-file iconn ml-4"> Resume</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
