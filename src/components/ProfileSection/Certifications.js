import React from 'react';
import { connect } from 'react-redux';

const Certifications = ({ certs }) => {
  const renderContents = () => {
    return certs.map((certs, i) => {
      return (
        <div key={i} className="description certts mb-2">
          <span style={{ color: '#42f55d' }}>{certs.title}</span>
          <ul style={{ paddingLeft: '40px', marginBottom: '0px' }}>
            {certs.certifications.map((certification, i) => (
              <li key={i}>{certification}</li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return <div className="pt-3">{renderContents()}</div>;
};
const mapStateToProps = (state) => ({ certs: state.certs });
export default connect(mapStateToProps)(Certifications);
