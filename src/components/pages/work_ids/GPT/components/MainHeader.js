import React from 'react';
import { startCase } from 'lodash';

import { Cursor, Buttons } from './';

export default function MainHeader({ selected_project }) {
  return (
    <div className="project-detail-main">
      <div className="project-detail-column1">
        <div className="gpt-detail-main_img" style={{ cursor: 'none' }}>
          <Cursor />
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
            <span>GPT-3</span> is a mock AI site with UI from a Figma template
            by <a href="https://www.arshakir.com/for-followers">AR Shakir</a>.
            It includes various informational sections, CTA banners, and blog
            posts. It also is 100% mobile optimized for responsiveness covering
            most devices.
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
              As a personal project, I practiced building functional and
              reusable React components with clear file and folder structure.
              Focusing on fundamental CSS, I recreated a landing page based on
              the Figma template to test my ability to build a responsive site,
              create soft animations, and deploy to Netlify.
            </span>
          </div>
        </div>
        <Buttons selected_project={selected_project} />
      </div>
    </div>
  );
}
