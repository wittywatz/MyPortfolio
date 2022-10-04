import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const linkStyle = {
    textDecoration: 'none',
    color: '#00B4D8',
  };
  return (
    <footer className="bg-dark text-center pt-2 text-white">
      <div className="container">
        <div className="footer-body pt-2">
          <div className="footer-content" style={{ zIndex: '5' }}>
            <div className="mb-0 p-4">
              <a
                href="https://github.com/wittywatz"
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github icon-footer"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/watson-agbramu-a37320181/"
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab ml-4 icon-footer fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/wittywatz"
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab ml-4 fa-instagram icon-footer"></i>
              </a>
              <a
                style={linkStyle}
                href="mailto:watsonagbramu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope-open-text icon-footer ml-4"></i>
              </a>

              <p className="mt-1 text-white pt-2">
                Designed by Agbramu Watson.
              </p>
              <p className="pb-0 text-white">
                <i className="far fa-copyright" style={linkStyle}></i>
                {'   '}
                {date.getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
