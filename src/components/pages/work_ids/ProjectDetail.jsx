import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Better,
  GPT,
  CKLogin,
  CookbookCurator,
  GotTheBeat,
  MintHoney,
} from './components';
import useEntryScroll from '../../../hooks/useEntryScroll';
import { ProjectDetailFooter } from './components';
import { projects } from '../../../assets/project_data';

const ProjectDetail = () => {
  const url = useParams();
  const selected_project = projects.find((proj) => proj.id === url.id);

  const diff = ['better', 'cookbook', 'mint', 'ck-login'].includes(selected_project.id);

  useEntryScroll('.entry-load', 'fade-in-top');
  useEntryScroll('.square', 'swing-in-top-fwd');
  useEntryScroll('.project-detail__img', 'swing-in-top-fwd');

  const getComponent = () => {
    switch (url.id) {
      case 'better': {
        return <Better selected_project={selected_project} />;
      }
      case 'ck-login': {
        return <CKLogin selected_project={selected_project} />;
      }
      case 'cookbook': {
        return <CookbookCurator selected_project={selected_project} />;
      }
      case 'got-the-beat': {
        return <GotTheBeat selected_project={selected_project} />;
      }
      case 'gpt3': {
        return <GPT selected_project={selected_project} />;
      }
      case 'mint': {
        return <MintHoney selected_project={selected_project} />;
      }
      default:
        return (
          <div>
            Uh oh ! There's been an error. Please contact me for further
            assistance.
          </div>
        );
    }
  };

  return (
    <>
      <div style={{ height: '6rem' }} />
      <div className="project-detail_header">
        <div className="project-detail_header-img-container">
          <img
            src={selected_project.images[2]}
            alt={selected_project.alt}
            className={
              diff
                ? 'project-detail_header-img-diff'
                : 'project-detail_header-img'
            }
          />
        </div>
        <div className="project-detail_header-content">
          <h1>{selected_project.title}</h1>
          <p>{selected_project.category}</p>
        </div>
        {getComponent()}
        <ProjectDetailFooter id={selected_project.id} />
      </div>
    </>
  );
};

export default ProjectDetail;
