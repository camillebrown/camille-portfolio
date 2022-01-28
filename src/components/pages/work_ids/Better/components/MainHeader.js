import React from 'react';
import { startCase } from 'lodash';

import { Buttons } from './';

export default function MainHeader({ selected_project }) {
  return (
    <div className="project-detail-main">
      <div className="project-detail-column1">
        <div className="project-detail-main_img">
          <img
            src={selected_project.images[2]}
            alt={selected_project.alt}
            className="entry-load"
          />
        </div>
      </div>
      <div className="project-detail-column2">
        <div className="project-detail-main_content">
          <div className="entry-load project-detail-main_content-heading">
            <span className="logo">better</span>
            <span className="logo-dot">.</span> allows user to track their daily
            fitness activity, moods, sleep patterns, and meals over time. Using
            charts and graphs that make it easy to understand, the user can get
            insights into how each goal gets 'better'.
          </div>
          <div className="project-detail-main_lang">
            <h6 className="entry-load">Languages</h6>
            {selected_project.languages.map((lang, i) => {
              return (
                <span key={i} className="entry-load">
                  {startCase(lang)}
                  {i + 1 !== selected_project.languages.length && (
                    <span>, </span>
                  )}
                </span>
              );
            })}
          </div>
          <div className="project-detail-main_client">
            <h6 className="entry-load">Client</h6>
            <span className="entry-load">{selected_project.client}</span>
          </div>
          <div className="project-detail-main_desc">
            <h6 className="entry-load">Goal</h6>
            <span className="entry-load">
              Build a full-stack application with frontend and backend code that
              implements thoughtful user stories. The project was required to be
              deployed online so that it's publicly accessible and needed to be
              scoped out using a comprehensive ERD chart and wireframes.
            </span>
          </div>
        </div>
        <Buttons selected_project={selected_project} />
      </div>
    </div>
  );
}
