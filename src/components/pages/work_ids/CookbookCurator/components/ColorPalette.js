import React from 'react';

export default function ColorPalette({ selected_project }) {
  return (
    <div className="project-detail-colors_container">
      <div className="project-detail-colors_group">
        {selected_project.colors.map((color, id) => {
          return (
            <div className="project-detail-colors" key={id}>
              <div className="square" style={{ backgroundColor: color }} />
              <span>{color}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
