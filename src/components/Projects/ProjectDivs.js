import React from 'react';
import { projects } from './Data';
import {
  ProjectTitle,
  ProjectSubtitle,
  ProjectLinks,
  ProjectDivCard,
} from './ProjectElements';

export default function ProjectDivs() {
  return projects.map((project, idx) => {
    console.log(project.langs);
    return (
      <div className="column is-one-third" key={idx}>
        <ProjectDivCard className="card">
          <div className="card-image">
            <img src={project.img} alt={project.alt} className="card-image" />
          </div>
          <div
            className="card-content"
            style={{ background: '#ebe9e5', minHeight: '13rem' }}
          >
            <ProjectTitle className="title mt-1 is-size-5 has-text-centered is-uppercase has-text-weight-bold project-title">
              {project.title}
            </ProjectTitle>
            <ProjectSubtitle className="subtitle has-text-centered is-size-7 mt-1">
              {project.description}
            </ProjectSubtitle>
            <div className=" mx-6 is-flex is-justify-content-space-around is-align-items-center is-align-content-center">
              {!project.langs ? (
                <div className="is-flex is-align-items-center">
                  <span
                    className="is-size-7 mr-2 is-uppercase has-text-weight-semibold"
                    style={{ fontFamily: '"Lato", sans-serif' }}
                  >
                    Built with
                  </span>
                  <img
                    src={project.squarespace}
                    alt="Squarespace logo"
                    style={{ width: '25px', height: '25px' }}
                  />
                </div>
              ) : (
                project.langs.map((lang, idx) => (
                  <lang.icon
                    className="is-size-4 mx-1 my-2"
                    style={{ color: '#444443' }}
                    key={idx}
                  />
                ))
              )}
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
            {project.git && (
              <ProjectLinks
                className="is-uppercase has-text-centered card-footer-item"
                href={project.git}
                target="_blank"
                rel="noreferrer"
                aria-label="test"
              >
                view the code
              </ProjectLinks>
            )}
          </footer>
        </ProjectDivCard>
      </div>
    );
  });
}
