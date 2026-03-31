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
      style={{ paddingTop: '4rem', backgroundColor: '#0d1117' }}
      className="text-white"
    >
      <div className="container">
        <div className="text-center mb-4">
          <p className="section-title" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00b4d8', marginBottom: '0.5rem' }}>Experience &amp; Skills</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.01em' }}>My <span style={{ color: '#00b4d8' }}>Profile</span></h2>
        </div>
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
