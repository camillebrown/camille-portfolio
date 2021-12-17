import React from 'react';
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
} from '../../../assets/icons';
import './skills.css';

const Skills = () => (
  <div className="skills" id="skills">
    <h2 className="skills-heading">Skilled in 5+ coding languages</h2>
    <div className="skills-container_div">
      <div className="skills-div">
        <FaCss3Alt color="#2b7272" />
        <p>CSS</p>
      </div>
      <div className="skills-div">
        <SiPostgresql color="#2b7272" />
        <p>PostgreSQL</p>
      </div>
      <div className="skills-div">
        <SiJavascript color="#2b7272" />
        <p>Javascript</p>
      </div>
      <div className="skills-div">
        <SiMongodb color="#2b7272" />
        <p>MongoDB</p>
      </div>
      <div className="skills-div">
        <FaReact color="#2b7272" />
        <p>React JS</p>
      </div>
      <div className="skills-div">
        <FaPython color="#2b7272" />
        <p>Python</p>
      </div>
      <div className="skills-div" id="node">
        <FaNodeJs color="#2b7272" />
        <p>Node JS</p>
      </div>
    </div>
  </div>
);

export default Skills;
