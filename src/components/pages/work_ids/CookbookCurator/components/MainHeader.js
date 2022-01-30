import React from 'react';

import { ProjectButtons, LangsClient } from '../../ProjComponents';

export default function MainHeader({ selected_project }) {
  return (
    <div className="project-detail-main">
      <div className="project-detail-column1">
        <div className="project-detail-main_img" style={{ margin: '2rem' }}>
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
            <span className="cc-detail-main_content-span">
              The Cookbook Curator
            </span>{' '}
            allows users to find hundreds of thousands of recipes and add them
            to their own personalized cookbook! Users can learn what ingredients
            are needed and how to make each recipe from scratch! Users can
            search for recipes, add them to their cookbook, and create their own
            personal recipes to store them in the personal cookbook.
          </div>
          <LangsClient selected_project={selected_project} />
          <div className="project-detail-main_desc">
            <h6 className="entry-load">Goal</h6>
            <span className="entry-load">
              Build a full-stack CRUD application with at least 2 models that
              includes sign up/log in functionality, with authentication.
              Implement basic authorization by restricting access to certain
              features and have complete RESTful routes with GET, POST,
              PUT, and DELETE. Deployed online (Heroku) and accessible to
              the public.
            </span>
          </div>
        </div>
        <ProjectButtons selected_project={selected_project} />
      </div>
    </div>
  );
}
