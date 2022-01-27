import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Better,
  GPT,
  BurgerStack,
  CKLogin,
  CookbookCurator,
  GotTheBeat,
  MintHoney,
} from './components';
import useEntryScroll from '../../../hooks/useEntryScroll';
import { projects } from '../../../assets/project_data';

const ProjectDetail = () => {
  const url = useParams();
  const selected_project = projects.find((proj) => proj.id === url.id);

  useEntryScroll('.entry-load', 'fade-in-top');

  const getComponent = () => {
    switch (url.id) {
      case 'better': {
        return <Better selected_project={selected_project} />;
      }
      case 'ck_login': {
        return <CKLogin selected_project={selected_project} />;
      }
      case 'cookbook': {
        return <CookbookCurator selected_project={selected_project} />;
      }
      case 'got_the_beat': {
        return <GotTheBeat selected_project={selected_project} />;
      }
      case 'gpt': {
        return <GPT selected_project={selected_project} />;
      }
      case 'burger_stack': {
        return <BurgerStack selected_project={selected_project} />;
      }
      case 'mint': {
        return <MintHoney selected_project={selected_project} />;
      }
      default:
        return <div>Uh oh! There's been an error. Please contact me for further assistance.</div>
    }
  };

  return (
    <>
      <div style={{ height: '6rem' }} />
      <div className="work_id_header">
        <div className="work_id_header-img">
          <img src={selected_project.images[2]} alt={selected_project.alt} />
        </div>
        <div className="work_id_header-content ">
          <h1 className="work_id_header-content-h1 ">
            {selected_project.title}
          </h1>
          <p className="work_id_header-content-p ">
            {selected_project.category}
          </p>
        </div>
        {getComponent()}
      </div>
    </>
  );
};

export default ProjectDetail;
