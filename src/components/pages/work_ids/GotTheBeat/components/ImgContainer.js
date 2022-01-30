import React from 'react';

import LaptopDisplay from '../../../../shared/laptop-display/LaptopDisplay';

export default function ImgContainer({ selected_project }) {
  return (
    <div className="project-detail__asset-container">
      <p>Original Wireframes</p>
      <div className="gtb-detail__asset-wireframes">
        <div className="gtb-detail__asset-wireframes-main">
          <LaptopDisplay img={selected_project.images[4]} />
        </div>
        <div className="gtb-detail__asset-wireframes-secondary">
          <LaptopDisplay
            img={selected_project.images[5]}
            style={{ width: '30%' }}
          />
          <LaptopDisplay
            img={selected_project.images[6]}
            style={{ width: '30%' }}
          />
        </div>
      </div>
    </div>
  );
}
