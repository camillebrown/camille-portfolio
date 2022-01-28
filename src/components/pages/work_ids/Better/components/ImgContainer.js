import React from 'react';

import { Hover } from './';

export default function ImgContainer({ selected_project }) {
  return (
    <div className="project-detail__img-container">
      <h1>Assets</h1>
      <div className="project-detail__img-group">
        <div
          className="project-detail__img"
          style={{ backgroundImage: `url(${selected_project.images[3]})` }}
        />
        <div
          className="project-detail__img"
          style={{ backgroundImage: `url(${selected_project.images[4]})` }}
        />
        <div
          className="project-detail__img"
          style={{ backgroundImage: `url(${selected_project.images[1]})` }}
        />
      </div>
      <Hover />
    </div>
  );
}
