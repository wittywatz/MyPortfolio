import React from 'react';
import profile from '../images/profile.jpg';
import resume from '../../static/Resume.pdf';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="bg-dark m-0 pt-4 about-page">
      <div id="About" className="about-container">
        <h1
          className="text-center m-0 pb-5 about-header"
          style={{ color: '#00b4d8' }}
        >
          <strong className="text-box">ABOUT</strong>
        </h1>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center image-div">
              <img
                // style={{ borderRadius: '100%', border: '4px solid black' }}
                src={profile}
                alt="Profile"
                className=" image-box"
              />
            </div>
            <div className="col-md-6 col-sm-12 text-justify text-white">
              <p>
                I am a proactive and self-motivated individual with over 4 years
                of experience building and designing scalable web applications.
              </p>
              <p>
                {' '}
                I hold a Master’s degree{' '}
                <span style={{ color: '#00B4D8' }}>(distinction)</span> in
                Electrical and Computer Engineering from the University of
                Waterloo, Ontario, Canada where I took courses pertaining to
                Software Engineering, Data Analysis, Image Processing, Control
                Engineering, and Business.
              </p>
              <p>
                I can confidently use HTML, CSS, JavaScript (ES6), React JS,
                Redux, Express JS, Node JS, Machine Learning Libraries, etc. and
                also;
                <div className="description">
                  <ul>
                    <li>
                      Design algorithms with the use of adequate data structures
                      to reduce the downtime posed by information access and
                      retrieval.
                    </li>
                    <li>Perform CRUD operations.</li>
                    <li>Work with relational and non-relational databases.</li>
                  </ul>
                </div>
              </p>
              <p>
                I design and build RESTful APIs for web services and also
                consume them to make responsive websites. I am also conversant
                with machine learning algorithms and have worked on both object
                classification and detection tasks.{' '}
              </p>
              {/* <p>
                I am currently seeking a full-time position at a value adding
                organization where I could leverage my skills to help in the
                problem-solving process while also developing myself and gaining
                new experiences from the organization. Learning for me never
                ends, as a product and quality oriented individual, I would sure
                put forth my best to deliver excellent performing results and
                nothing short.
              </p> */}
              <div className="aaaaa">
                <button className="mt-1 mr-3 text-center">
                  <a
                    className="text-dark text-center"
                    href="mailto:watsonagbramu@gmail.com"
                  >
                    {' '}
                    <span style={{ color: '#00B4D8' }}>
                      <i className="fas fa-envelope-open-text iconn"> Email</i>
                    </span>
                  </a>
                </button>

                <button className="mt-1 text-center">
                  <a
                    className="text-dark text-center"
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span style={{ color: '#00B4D8' }}>
                      <i className=" far fa-file iconn"> Resume</i>
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// animate__fadeOut;
export default AboutPage;
