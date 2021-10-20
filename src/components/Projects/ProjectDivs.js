import React from 'react';
import { projects } from './Data';
import {
  ProjectTitle,
  ProjectSubtitle,
  ProjectLinks,
} from './ProjectElements2';

export default function ProjectDivs() {
  return projects.map((project, idx) => {
    return (
      <div className="column">
        <div
          className="card my-6"
          key={idx}
          style={{ border: '0.5px solid #ebe9e5' }}
        >
          <div className="card-image">
            <figure className="image">
              <img src={project.img} alt={project.alt} />
            </figure>
          </div>
          <div className="card-content" style={{ background: '#ebe9e5' }}>
            <ProjectTitle className="title mt-1 is-size-5 has-text-centered is-uppercase has-text-weight-bold project-title">
              {project.title}
            </ProjectTitle>
            <ProjectSubtitle className="subtitle has-text-centered is-size-7 mt-1">
              {project.description}
            </ProjectSubtitle>
            <div className=" mx-6 is-flex is-justify-content-space-around is-align-items-center is-align-content-center">
              {project.langs.map((lang, idx) => (
                <lang.icon
                  className="is-size-4 mx-1 my-2"
                  style={{ color: '#444443' }}
                  key={idx}
                />
              ))}
            </div>
          </div>
          <footer className="card-footer">
            <ProjectLinks
              className="is-uppercase has-text-centered card-footer-item"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label="test"
            >
              view the app
            </ProjectLinks>
            <ProjectLinks
              className="is-uppercase has-text-centered card-footer-item"
              href={project.git}
              target="_blank"
              rel="noreferrer"
              aria-label="test"
            >
              view the code
            </ProjectLinks>
          </footer>
        </div>
      </div>
    );
  });
}
