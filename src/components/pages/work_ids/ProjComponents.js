import React from 'react';
import { startCase } from 'lodash';

import { HiOutlineArrowNarrowRight } from '../../../assets/icons';

export const ProjectButtons = ({ selected_project }) => {
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
};

export const LangsClient = ({ selected_project }) => {
  return (
    <>
      <div className="project-detail-main_lang">
        <h6 className="entry-load">Languages</h6>
        {selected_project.languages.map((lang, i) => {
          return (
            <span key={i} className="entry-load">
              {startCase(lang)}
              {i + 1 !== selected_project.languages.length && <span>, </span>}
            </span>
          );
        })}
      </div>
      <div className="project-detail-main_client">
        <h6 className="entry-load">Client</h6>
        <span className="entry-load">{selected_project.client}</span>
      </div>
    </>
  );
};
