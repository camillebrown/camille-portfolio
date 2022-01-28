import React from 'react';
import '../better.css';

export default function ImgContainer({ selected_project }) {
  return (
    <div className="project-detail__asset-container">
      <p>Original Wireframes</p>
      <iframe
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNYaHn4GiOgXZud07yDWa39%2FBetter.-App%3Fnode-id%3D0%253A1"
        className="project-detail__iframe"
        title="Figma wireframes"
        allowfullscreen
      />
      <div className="project-detail__additional">
        <p>Additional Assets</p>
        <div className="project-detail__img-group">
          <div className="better-detail__column1">
            <img
              className="project-detail__img"
              src={selected_project.images[1]}
              alt="Better Headers"
            />
            <p>Custom Page Headers</p>
            <span>
              Credit:
              <a
                href="https://www.tylermisha.com/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ marginLeft: '0.2rem' }}
              >
                Tyler Misha Design
              </a>
            </span>
          </div>
          <div className="better-detail__column2">
            <div>
              <img
                className="project-detail__img"
                src={selected_project.images[3]}
                alt="Better ERD"
              />
              <p>ERD</p>
            </div>
            <div className="better-detail__column2-charts">
              <div>
                <img
                  className="project-detail__img"
                  src={selected_project.images[4]}
                  alt="Better Diet Chart"
                />
                <img
                  className="project-detail__img"
                  src={selected_project.images[5]}
                  alt="Better Mood Chart"
                />
                <p>Example Charts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
