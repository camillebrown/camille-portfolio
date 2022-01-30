import React from 'react';

export default function ImgContainer({ selected_project }) {
  return (
    <div className="project-detail__asset-container">
      <p>Original Wireframes</p>
      <div className="cc-detail__asset-wireframes">
        <div className="cc-detail__asset-img-container">
          <img src={selected_project.images[7]} alt={selected_project.alt} />
        </div>
        <div className="cc-detail__asset-img-container">
          <img src={selected_project.images[5]} alt={selected_project.alt} />
        </div>
        <div className="cc-detail__asset-img-container">
          <img src={selected_project.images[6]} alt={selected_project.alt} />
        </div>
        <div className="cc-detail__asset-img-container">
          <img src={selected_project.images[4]} alt={selected_project.alt} />
        </div>
      </div>
      <div className="project-detail__additional">
        <p>Additional Assets</p>
        <div className='cc-detail__additional-iframe'>
          <iframe
            allowFullScreen
            frameBorder="0"
            style={{
              width: '840px',
              height: '680px',
              border: '1px solid lightgrey',
              marginTop: '2rem',
            }}
            title="ERD Chart"
            src="https://lucid.app/documents/embeddedchart/7f5c2bc8-1728-43c6-9f88-222ee8d10d02"
            id="xSuOozD9_Z2u"
          ></iframe>
          <span className="cc-detail__additional-span">
            Cookbook Curator ERD
          </span>
        </div>
      </div>
    </div>
  );
}
