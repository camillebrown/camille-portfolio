import React from 'react';

import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
  CgMenuGridO,
} from '../../../../assets/icons';
import GetProjects from '../get_projects';

const ProjectDetailFooter = ({ id }) => {
  const { previous, next } = GetProjects(id);

  return (
    <div className="project-detail__footer">
      <div
        className="project-detail__footer-switch"
        onClick={() => (window.location.href = `/work/${previous.id}`)}
      >
        <HiOutlineArrowNarrowLeft className="project-detail__footer-icon" />
        <div className="project-detail__footer-content">
          <p>previous</p>
          <h2>{previous.title}</h2>
        </div>
      </div>
      <div className="project-detail__footer-middle">
        <a href="/work">
          <CgMenuGridO className="project-detail__footer-gridicon" />
        </a>
      </div>
      <div
        className="project-detail__footer-switch"
        onClick={() => (window.location.href = `/work/${next.id}`)}
      >
        <div className="project-detail__footer-content">
          <p>next</p>
          <h2>{next.title}</h2>
        </div>
        <HiOutlineArrowNarrowRight className="project-detail__footer-icon" />
      </div>
    </div>
  );
};

export default ProjectDetailFooter;