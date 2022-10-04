import React from 'react';
import { connect } from 'react-redux';

const Experience = ({ experiences }) => {
  const RenderContents = () => {
    return experiences.map((experiences, i) => {
      return (
        <div key={i} className="description mb-3">
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className="exp-header"
          >
            <div>{experiences.title}</div>
            <div style={{ color: '#00B4D8' }}>{experiences.duration}</div>
          </div>
          <div style={{ color: '#00B4D8' }}>{experiences.organization}</div>
          <ul style={{ paddingLeft: '40px', marginBottom: '0px' }}>
            {experiences.roles.map((role, i) => (
              <li key={i} className="text-justify">
                {role}
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="pt-3">
      <RenderContents />
    </div>
  );
};
const mapStateToProps = (state) => ({ experiences: state.experiences });
export default connect(mapStateToProps)(Experience);
