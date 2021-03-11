import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import './Project.css';

const Project = ({ projects }) => {
  const renderContents = () => {
    return projects.map((project, i) => {
      return (
        <div
          key={i}
          className={
            i % 2 === 0 ? 'project-contents mt-3' : 'project-contents-2 mt-3'
          }
          style={{ zIndex: '5' }}
        >
          <h6 className="pt-5 project-name">
            <a
              className="project-link"
              href={project.liveApp}
              alt={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-link"></i> {project.name}
            </a>
          </h6>
          <div className="main-project-content">
            {/* {Videoooooo} */}
            <ReactPlayer
              url={project.videoDemo}
              controls={true}
              width={'100%'}
              height={'250px'}
            />
          </div>
          <div className="main-project-content-2">
            {/* Actual Content */}
            <div className="project-briefing mb-0 pb-0">
              <div className="project-titles project-link">
                <a
                  className="project-link"
                  href={project.liveApp}
                  alt={project.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-link"></i> {project.name.toUpperCase()}
                </a>
              </div>
              <div className="stacks-used pb-1">
                <span style={{ color: '#42f55d' }}>Stacks:</span>{' '}
                {project.stack}
              </div>
              <div className="description">
                <span style={{ color: '#42f55d' }}>Description:</span>
                <ul style={{ paddingLeft: '10px', marginBottom: '0px' }}>
                  {project.description.map((description, i) => (
                    <li className="text-justify" key={i}>
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="project-github-link">
              <a
                className="project-link icon-before-content"
                href={project.github}
                alt={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <i className="file-icon-click far fa-file-code"></i>
              </a>
              {'   '}
              <a
                style={{ paddingLeft: '30px' }}
                className="project-link icon-before-content-2"
                href={project.liveApp}
                alt={project.name}
                target="_blank"
                rel="noreferrer"
              >
                {'  '}
                <i className="file-icon-click fas fa-link"></i>
                {/* <i className="f far fa-file-code"></i> */}
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="Projects" className="bg-dark text-white pt-5 p-3">
      <div className="container">
        <div className="project-content pb-4">{renderContents()}</div>

        <div className="text-center d-flex pt-2 justify-content-center">
          <button style={{ zIndex: '5' }} className="mt-1 text-center">
            <a
              className="text-dark text-center"
              href="https://github.com/wittywatz"
              alt="github link"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ color: '#42f55d' }}>
                {/* <i className=" far fa-file iconn"> */} More Projects and
                Algorithms on Github
                {/* </i> */}
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Project);
