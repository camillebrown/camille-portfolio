import React from 'react';
import classNames from 'classnames';

export default function ColorPalette({ selected_project }) {
  return (
    <div className="project-detail-colors_container">
      <div className="project-detail-colors_group">
        {selected_project.colors.map((color, id) => {
          return (
            <div className="project-detail-colors" key={id}>
              <div
                className={classNames('square', {
                  border: color === '#FFFFFF',
                })}
                style={{ backgroundColor: color }}
              />
              <span>{color}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
