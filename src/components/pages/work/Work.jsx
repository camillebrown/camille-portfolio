import React from 'react';

import './work.css';
import { cookbook } from './assets';
import { column1, column2, column3 } from './main_data';
import ProjectDiv from './ProjectDiv';

const Work = () => {
  return (
    <>
      <div style={{ height: '6rem' }} />
      <div className="work">
        <div className="work-container">
          <div className="row">
            <div className="column">
              {ProjectDiv(column1)}
              <img src={cookbook} alt="Cookbook Curator Project Header" />
            </div>
            <div className="column">{ProjectDiv(column2)}</div>
            <div className="column">
              {ProjectDiv(column3)}
              <img src={cookbook} alt="Cookbook Curator Project Header" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
