import React from 'react';

export default function ImgContainer({ selected_project }) {
  return (
    <div className="mh-detail__asset-container">
      <div className="project-detail__additional">
        <p>Additional Assets</p>
        <div className="mh-detail__img-group">
          <div className="mh-detail__main1">
            <img src={selected_project.images[4]} alt="Mint Logo" />
            <p>Custom Logo</p>
            <a
              href="https://www.tylermisha.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ marginLeft: '0.2rem' }}
            >
              Credit: Tyler Mishá
            </a>
          </div>
          <div className="mh-detail__main2">
            <div>
              <img
                className="project-detail__img"
                src={selected_project.images[5]}
                alt="Mint Rum Cocktails"
              />
              <img
                className="project-detail__img"
                src={selected_project.images[6]}
                alt="Mint Tequila Cocktails"
              />
              <img
                className="project-detail__img"
                src={selected_project.images[7]}
                alt="Mint Vodka Cocktails"
              />
              <img
                className="project-detail__img"
                src={selected_project.images[8]}
                alt="Mint Whiskey Cocktails"
              />
              <p>Custom Canva Assets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
