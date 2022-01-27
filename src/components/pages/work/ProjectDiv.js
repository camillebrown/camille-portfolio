import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default function ProjectDiv(array) {
  return array.map((proj) => {
    return (
      <div className="project-div" key={proj.id}>
        <Link to={`/work/${proj.id}`}>
          <div className="project-div-overlay"></div>
          <img
            className={classnames('project-div-image', proj.work_page_classname)}
            src={proj.images[1]}
            alt={proj.alt}
          />
          <div className="project-div-details fadeIn-top">
            <h3>{proj.title}</h3>
            <h6>{proj.category}</h6>
            <p>View More</p>
          </div>
          <h2>{proj.title}</h2>
        </Link>
      </div>
    );
  });
}
