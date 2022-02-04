import React from 'react';

export default function ProjectDiv(array) {
  return array.map((proj) => {
    return (
      <div className="project-div" key={proj.id}>
        <a href={`/work/${proj.id}`}>
          <div className="project-div-overlay"></div>
          <img
            className="project-div-image"
            src={proj.images[1]}
            alt={proj.alt}
          />
          <div className="project-div-details fadeIn-top">
            <h3>{proj.title}</h3>
            <h6>{proj.category}</h6>
            <p>View More</p>
          </div>
        </a>
      </div>
    );
  });
}
