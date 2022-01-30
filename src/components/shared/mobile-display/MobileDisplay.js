import React from 'react';

import './mobile_display.css';

export default function MobileDisplay({ images }) {
  return (
    <div className="mobile-dislays">
      {images.map((img) => {
        return (
          <div className="smartphone">
            <div className="content">
              <img src={img} alt="GPT Mobile View 3" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
