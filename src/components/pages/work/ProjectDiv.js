import React from 'react';

export default function ProjectDiv(array) {
  return array.map((proj, idx) => {
    return (
      <div className="work-project-div" key={idx}>
        <img src={proj.src} alt={proj.alt} className={proj.classname} />
        <p>{proj.title}</p>
      </div>
    );
  });
}
