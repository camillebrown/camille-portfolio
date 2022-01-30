import React from 'react';

import { ProjectButtons, LangsClient } from '../../ProjComponents';

export default function MainHeader({ selected_project }) {
  return (
    <div className="project-detail-main">
      <div className="project-detail-column1">
        <div
          className="project-detail-main_img"
          style={{ background: '#191919' }}
        >
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
            <span className="gtb-detail-main_content-span">Got the Beat </span>
            is a music based trivia game where the user answers 30 multiple
            choice questions across 3 rounds. The three rounds include: 'Guess
            the Artist', 'Finish the Lyrics', and 'General Music Trivia'. Each
            round gets harder than the previous so the points per round
            increases as you move further along in the game.
          </div>
          <LangsClient selected_project={selected_project} />
          <div className="project-detail-main_desc">
            <h6 className="entry-load">Goal</h6>
            <span className="entry-load">
              Build a creative game with winning and losing game logic that
              displays score and win/loss status. Use semantic markup for HTML
              and CSS that uses jQuery for DOM manipulation and vanilla
              JavaScript for game logic. Deployed online and accessible to the
              public.
            </span>
          </div>
        </div>
        <ProjectButtons selected_project={selected_project} />
      </div>
    </div>
  );
}
