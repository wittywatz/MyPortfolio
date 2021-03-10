import React from 'react';
import { connect } from 'react-redux';
import { profileActive } from '../../actions';
import Awards from './Awards';
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import './ProfileSection.css';
import Skills from './Skills';

const ProfileSection = ({ sections, profileActive, selectedSection }) => {
  const renderSections = () => {
    return sections.map((section, i) => {
      return section.title !== selectedSection.title ? (
        <div
          className="section-header-content"
          onClick={() => profileActive(section)}
          key={i}
        >
          {section.title.toUpperCase()}
        </div>
      ) : (
        <div
          className="section-header-content activeSection"
          onClick={() => profileActive(section)}
          key={i}
        >
          {section.title.toUpperCase()}
        </div>
      );
    });
  };
  const renderSelectedSection = () => {
    switch (selectedSection.title) {
      case 'skills':
        return <Skills />;
      case 'certification':
        return <Certifications />;
      case 'awards':
        return <Awards />;
      case 'experience':
        return <Experience />;
      default:
        return <Education />;
    }
  };
  return (
    <div
      id="Profile"
      style={{ paddingTop: '4rem' }}
      className="bg-dark text-white"
    >
      <div className="container">
        <div className="section-body">
          <div className="section-header" style={{ zIndex: '5' }}>
            {renderSections()}
          </div>
          <div className="pt-1">
            {renderSelectedSection()}
            {/* <Education />
            <Skills />
            <Awards />
            <Certifications /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  sections: state.section,
  selectedSection: state.selectedSection,
});

export default connect(mapStateToProps, { profileActive })(ProfileSection);
