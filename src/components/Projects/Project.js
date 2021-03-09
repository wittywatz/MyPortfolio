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
              {project.name}
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
                {project.name.toUpperCase()}
              </div>
              <div className="stacks-used pb-1">
                <span style={{ color: '#42f55d' }}>Stacks:</span>{' '}
                {project.stack}
              </div>
              <div className="description">
                <span style={{ color: '#42f55d' }}>Description:</span>
                <ul style={{ paddingLeft: '10px', marginBottom: '0px' }}>
                  {project.description.map((description, i) => (
                    <li key={i}>{description}</li>
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
                <i className="file-icon-click far fa-file-code"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-dark text-white p-3">
      <div className="container">
        <div className="project-content">{renderContents()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Project);

// <div className="project-contents mb-3" style={{ zIndex: '5' }}>
//             <h4 className="pt-5 project-name">
//               <a
//                 className="project-link"
//                 href="https://crown-enterprise.herokuapp.com/"
//                 alt="crown-enterprise"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Crown Enterprise
//               </a>
//             </h4>
//             <div className="main-project-content">
//               {/* {Videoooooo} */}
//               <ReactPlayer
//                 url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
//                 controls={true}
//                 width={'100%'}
//                 height={'250px'}
//               />
//             </div>
//             <div className="main-project-content-2">
//               {/* Actual Content */}
//               <div className="project-briefing mb-0 pb-0">
//                 <div className="project-titles project-link">title</div>
//                 <div className="stacks-used pb-1">
//                   <span style={{ color: '#42f55d' }}>Stacks:</span> sdsbeb,
//                   disifsf, ssifif, sosfos, sadsosf, sofof
//                 </div>
//                 <div className="description">
//                   <span style={{ color: '#42f55d' }}>Description:</span>
//                   <ul style={{ paddingLeft: '10px', marginBottom: '0px' }}>
//                     <li>isisi</li>
//                     <li>isisi</li>
//                     <li>isisi</li>
//                     <li>isisi</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="project-github-link">
//                 <a
//                   className="project-link icon-before-content"
//                   href="https://github.com/wittywatz/crown-clothing"
//                   alt="crown-enterprise"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <i className="file-icon-click far fa-file-code"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="project-contents-2 mt-3" style={{ zIndex: '5' }}>
//             <h4 className="pt-5 project-name">Project Name</h4>
//             <div className="main-project-content">
//               <ReactPlayer
//                 url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
//                 controls={true}
//                 width={'100%'}
//                 height={'250px'}
//               />
//             </div>
//             <div className="main-project-content-2">
//               <ReactPlayer
//                 url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
//                 controls={true}
//                 width={'100%'}
//                 height={'300px'}
//               />
//             </div>
//           </div>
