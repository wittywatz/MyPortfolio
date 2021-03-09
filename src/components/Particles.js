import React from 'react';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
  },
};

const Particless = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    }}
  >
    <Particles params={particleOptions} />
  </div>
);

export default Particless;
