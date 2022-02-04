import React from 'react';

import { ProjectButtons, LangsClient } from '../../components';

export default function MainHeader({ selected_project }) {
  return (
    <div className="project-detail-main">
      <div className="project-detail-column1">
        <div className="project-detail-main_img">
          <img
            src={selected_project.images[3]}
            alt={selected_project.alt}
            className="entry-load"
          />
        </div>
      </div>
      <div className="project-detail-column2">
        <div className="project-detail-main_content">
          <div className="entry-load project-detail-main_content-heading">
            <span className="mh-detail-main_content-span">mint&honey™</span> was
            created for the at-home bartender looking for a unique cocktail
            experience without the need to leave the kitchen. Ready-made
            signature drinks are the new way to bring the perfect bar experience
            home.
          </div>
          <LangsClient selected_project={selected_project} />
          <div className="project-detail-main_desc">
            <h6 className="entry-load">Goal</h6>
            <span className="entry-load">
              As a personal project, I practiced building functional and
              reusable React components with clear file and folder structure.
              Focusing on fundamental CSS, I created a landing page to test my
              ability to build a responsive site and deploy to Netlify.
            </span>
          </div>
        </div>
        <ProjectButtons selected_project={selected_project} />
      </div>
    </div>
  );
}
