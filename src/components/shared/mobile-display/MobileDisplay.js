import React from 'react';

export default function MobileDisplay() {
  return (
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
  );
}
