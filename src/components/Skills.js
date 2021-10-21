import React from 'react';
import styled from 'styled-components';
import { FaDatabase } from 'react-icons/fa';
import {
  SiJavascript,
  SiPython,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiHtml5,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

export const Single = styled.div`
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
  color: #df9c37;
`;

export const SkillsContainer = styled.div`
  flex-wrap: wrap;
  max-width: 65%;
`;

export const Skills = () => {
  let skills = [
    {
      name: 'HTML 5',
      icon: SiHtml5,
    },
    {
      name: 'Javascript',
      icon: SiJavascript,
    },
    {
      name: 'SQL',
      icon: FaDatabase,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
    },
    {
      name: 'Flask',
      icon: SiFlask,
    },
    {
      name: 'React JS',
      icon: SiReact,
    },
    {
      name: 'CSS',
      icon: SiCss3,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'Node JS',
      icon: SiNodedotjs,
    },
  ];

  const skillsDivs = skills.map((skill, id) => (
    <Single
      className="is-size-6 is-uppercase mr-4 my-3 is-flex is-flex-direction-column is-align-items-center"
      key={id}
    >
      <skill.icon className="is-size-5 mb-2" style={{ color: '#444443' }} />
      <p>{skill.name}</p>
    </Single>
  ));

  return (
    <SkillsContainer className="is-flex is-flex-direction-row is-justify-content-flex-start ">
      {skillsDivs}
    </SkillsContainer>
  );
};
