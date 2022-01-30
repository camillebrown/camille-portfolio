import React from 'react';

import MobileDisplay from '../../../../shared/mobile-display/MobileDisplay.js';
import { gpt_mobile1, gpt_mobile2, gpt_mobile3 } from '../../../../../assets/images';

export default function ImgContainer() {
  const images = [gpt_mobile1, gpt_mobile2, gpt_mobile3];
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
          <MobileDisplay images={images} />
        </div>
      </div>
    </div>
  );
}
