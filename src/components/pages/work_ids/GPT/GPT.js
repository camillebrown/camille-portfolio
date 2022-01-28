import React from 'react';

import {
  gpt_mobile1,
  gpt_mobile2,
  gpt_mobile3,
} from '../../../../assets/images';

export default function Better() {
  return (
    <>
      <div style={{ height: '6rem' }} />
      <h1>GPT</h1>
      <div className="project-detail_mobile-dislays">
        <div className="smartphone">
          <div className="content">
            <img src={gpt_mobile3} alt="GPT Mobile View 3" />
          </div>
        </div>
        <div className="smartphone">
          <div className="content">
            <img src={gpt_mobile2} alt="GPT Mobile View 2" />
          </div>
        </div>
        <div className="smartphone">
          <div className="content">
            <img src={gpt_mobile1} alt="GPT Mobile View 1" />
          </div>
        </div>
      </div>
    </>
  );
}
