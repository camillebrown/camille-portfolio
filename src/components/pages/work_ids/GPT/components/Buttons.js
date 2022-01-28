import React from 'react';

import { HiOutlineArrowNarrowRight } from '../../../../../assets/icons';

export default function Buttons({ selected_project }) {
  return (
    <div className="project-detail-main_buttons">
      <div className="project-detail-main_btn-container">
        <a
          href={selected_project.url}
          rel="noopener noreferrer"
          target="_blank"
          className="entry-load"
        >
          <p>See Website</p>
          <span>
            <HiOutlineArrowNarrowRight className="arrow" />
          </span>
        </a>
      </div>
      <div className="project-detail-main_btn-container">
        <a
          href={selected_project.git}
          rel="noopener noreferrer"
          target="_blank"
          className="entry-load"
        >
          <p>See Github</p>
          <span>
            <HiOutlineArrowNarrowRight className="arrow" />
          </span>
        </a>
      </div>
    </div>
  );
}
