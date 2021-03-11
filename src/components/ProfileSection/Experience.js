import React from 'react';
import { connect } from 'react-redux';

const Experience = ({ experiences }) => {
  const renderContents = () => {
    return experiences.map((experiences, i) => {
      return (
        <div key={i} className="description mb-2">
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className="exp-header"
          >
            <div>{experiences.title}</div>
            <div style={{ color: '#42f55d' }}>{experiences.duration}</div>
          </div>
          <div style={{ color: '#42f55d' }}>{experiences.organization}</div>
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

  return <div className="pt-3">{renderContents()}</div>;
};
const mapStateToProps = (state) => ({ experiences: state.experiences });
export default connect(mapStateToProps)(Experience);
