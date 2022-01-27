import React from 'react';

import './work.css';
import ProjectDiv from './ProjectDiv';
import { projects } from '../../../assets/project_data';

const Work = () => {
  const column1 = [projects[0], projects[3]];
  const column2 = [projects[1], projects[6], projects[5]];
  const column3 = [projects[2], projects[4]];
  
  return (
    <>
      <div style={{ height: '6rem' }} />
      <div className="work">
        <div className="work-container">
          <div className="row">
            <div className="column">{ProjectDiv(column1)}</div>
            <div className="column">{ProjectDiv(column2)}</div>
            <div className="column">{ProjectDiv(column3)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
