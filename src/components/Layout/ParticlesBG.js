import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBG() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await true;
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        name: 'Collisions Bounce',
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
            },
          },
          color: {
            value: ["#AE5222", "#D2964A", "#738062", "#B3B3A7", "#2B3A67"]
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
          },
          move: {
            bounce: true,
            enable: true,
            speed: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
              parallax: {
                enable: true,
                force: 20,
                smooth: 20,
              },
            },
          },
        },
        background: {
          color: '#F5E9D6',
        },
      }}
    />
  );
}
