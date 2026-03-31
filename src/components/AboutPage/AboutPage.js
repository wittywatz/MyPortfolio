import React from 'react';
import profile from '../images/profile.jpg';
import resume from '../../static/Resume.pdf';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="m-0 pt-4 about-page">
      <div id="About" className="about-container">
        <div className="text-center mb-5">
          <p className="section-title">Get to know me</p>
          <h2 className="about-header">About <span>Me</span></h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center image-div">
              <img src={profile} alt="Profile" className="image-box" />
            </div>
            <div className="col-md-6 col-sm-12 about-text">
              <p>
                Seasoned Software Engineer with 7+ years of experience building
                scalable data platforms and distributed systems across SaaS and
                fintech.
              </p>
              <p>
                Strong focus on multi-tenant architectures, event-driven systems,
                and high-volume data pipelines. Proven ability to lead projects
                from design to production and deliver systems that improve
                performance, reliability, and data access.
              </p>
              <p>
                I hold a Master&apos;s degree{' '}
                <span style={{ color: '#00B4D8' }}>(distinction)</span> in
                Electrical and Computer Engineering from the University of
                Waterloo, Ontario, Canada.
              </p>
              <p>
                My core expertise spans:
                <div className="description">
                  <ul>
                    <li>Data engineering with DBT, Snowflake, and Airbyte.</li>
                    <li>AI/ML systems using LangChain, RAG, and vector search.</li>
                    <li>Cloud infrastructure on AWS, GCP, and Azure.</li>
                    <li>Full-stack development with React, Next.js, Node.js, and FastAPI.</li>
                  </ul>
                </div>
              </p>
              <div className="aaaaa">
                <a href="mailto:watsonagbramu@gmail.com" className="about-btn">
                  <i className="fas fa-envelope-open-text"> </i> Email
                </a>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="about-btn">
                  <i className="far fa-file"> </i> Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
