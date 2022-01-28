import React from 'react';

import MobileDisplay from '../../../../shared/mobile-display/MobileDisplay.js';

export default function ImgContainer() {
  return (
    <div className="project-detail__asset-container">
      <p>Original Wireframe</p>
      <iframe
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Flz9lLpFHMxHm2odnwM3R0z%2Fgpt3%3Fnode-id%3D0%253A1"
        className="project-detail__iframe"
        title="Figma wireframes"
        allowFullScreen
      ></iframe>
      <div className="gpt-detail__additional">
        <p>Additional Assets</p>
        <div className="gpt-detail__img-group">
          <MobileDisplay />
        </div>
      </div>
    </div>
  );
}
