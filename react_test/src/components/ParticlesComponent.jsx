import React from 'react';
import Particles from 'react-particles-js';

const ParticleComponent = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#ffffff',
            },
            polygon: {
              nb_sides: 5,
            },
          },
        },
      }}
    />
  );
};

export default ParticleComponent;