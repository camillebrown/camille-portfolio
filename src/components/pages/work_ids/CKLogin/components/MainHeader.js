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
            <span className="ck-detail-main_content-span">Credit Key's©{' '}</span>
            proprietary software allows merchants to approve B2B customers for
            better monthly terms, in seconds, at the point of purchase. The
            unique lending model reduces friction for customers, driving
            satisfaction and flexibility.
          </div>
          <LangsClient selected_project={selected_project} />
          <div className="project-detail-main_desc">
            <h6 className="entry-load">Goal</h6>
            <span className="entry-load">
              New, cleaner login page for Credit Key, Inc. with enhanced user
              routing buttons. New branding and colors will carry forward in all
              pages of the Credit Key site for improved user experience and more
              eye-catching user interfaces.
            </span>
          </div>
        </div>
        <ProjectButtons selected_project={selected_project} />
      </div>
    </div>
  );
}
