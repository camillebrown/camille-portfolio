import React from 'react';

import './about.css';
import { profile1, profile2, profile3, profile4 } from '../../assets/images';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-heading_container">
          <div className="about-heading">
            <h1>About Me</h1>
            <p>
              I am a passionate and creative software developer who takes pride
              in providing the best service through all stages of your project –
              strategy, design, and web development.
            </p>
          </div>
        </div>
        <div className="about-content_container">
          <div className="about-container_groupA">
            <div>
              <span>1.</span>
              <p>Who I Am</p>
              <p>I'm a software and web developer based in Los Angeles, CA.</p>
            </div>
            <div>
              <span>2.</span>
              <p>What I Like</p>
              <p>
                I love the outdoors, sunny days on the beach and all things
                music.
              </p>
            </div>
            <div>
              <span>3.</span>
              <p>How I Help</p>
              <p>
                Need someone focused on attention to detail and design accuracy?
                I'm your girl!
              </p>
            </div>
            <div>
              <span>4.</span>
              <p>Why Me?</p>
              <p>
                I love bringing my approachable, team- or client-focused spirit
                to my work.
              </p>
            </div>
          </div>
          <div className="about-container_groupB">
            <div className="column1">
              <div className="about-container_groupB-horz">
                <img src={profile3} alt="" />
              </div>
              <div className="about-container_groupB-vert">
                <img src={profile2} alt="" />
              </div>
            </div>
            <div className="column2">
              <div className="about-container_groupB-vert">
                <img src={profile1} alt="" />
              </div>
              <div className="about-container_groupB-horz">
                <img src={profile4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
