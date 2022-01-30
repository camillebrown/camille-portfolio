import React from 'react';
import './project-div.css';

import { FiGithub, FiPlay } from '../../../../assets/icons';
import { projects } from '../../../../assets/project_data';

export default function ProjectDiv({ tag }) {
  let array = [];
  const topProjects = [
    'better',
    'ck-login',
    'gpt3',
    'mint',
    'cookbook',
    'got-the-beat',
  ];

  switch (tag) {
    case 'all':
      array = projects.filter((proj) => {
        return topProjects.includes(proj.id);
      });
      break;
    case 'js':
      array = projects.filter((proj) => {
        return proj.languages.includes('javascript');
      });
      break;
    case 'python':
      array = projects.filter((proj) => {
        return proj.languages.includes('python');
      });
      break;
    case 'css':
      array = projects.filter((proj) => {
        return proj.languages.includes('css');
      });
      break;
    default:
      array = projects;
  }

  return array.map((proj, idx) => {
    return (
      <div className="project_div" key={idx}>
        <div className="project_div-icons">
          <a href={proj.git} rel="noopener noreferrer" target="_blank">
            <FiGithub className="icon" />
          </a>
          {proj.url && (
            <a href={proj.url} rel="noopener noreferrer" target="_blank">
              <FiPlay className="icon go" />
            </a>
          )}
        </div>
        <div className="project_div-content">
          <h1 className="project_div-title">{proj.title}</h1>
          <div className="project_div-languages">
            {proj.languages.slice(0, 2).map((lang, i) => {
              return (
                <p key={i}>
                  {lang}
                  {i + 1 !== proj.languages.slice(0, 2).length && (
                    <span>•</span>
                  )}
                </p>
              );
            })}
          </div>
        </div>
        <div className="project-div_img">
          <img src={proj.images[0]} alt={proj.alt} className={proj.classname} />
        </div>
      </div>
    );
  });
}
