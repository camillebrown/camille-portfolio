import classNames from 'classnames';
import React from 'react';

export default function ColorPalette({ selected_project }) {
  return (
    <div className="project-detail-colors_container">
      <div className="project-detail-colors_group">
        {selected_project.colors.map((color, id) => {
          let lighter = color.charAt(1) === 'F';
          return (
            <div className="project-detail-colors" key={id}>
              <div
                className={classNames('square', { border: lighter })}
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
