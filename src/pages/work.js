import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import { projects } from '../components/Projects/Data';
import StaticNav from '../components/layout/StaticNav';

const Work = () => {
  const projDivs = projects.map((project, idx) => (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="main-proj"
      key={idx}
    >
      <Image src={project.img} alt={project.alt} />
      <Box overflow="hidden" className="main-proj-desc">
        <p className="main-proj-h2">{project.title}</p>
        <h1 className="proj-p">{project.description}</h1>
        <Box className="lang-icon-container">
          {project.langs.map((lang, idx) => (
            <lang.icon className="lang-icon" key={idx} />
          ))}
        </Box>
        <Box className="about-btns">
          <a
            className="about-btn-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label="My Resume"
          >
            view the app
          </a>
          <a
            className="about-btn-link"
            href={project.git}
            target="_blank"
            rel="noreferrer"
            aria-label="test"
          >
            view the code
          </a>
        </Box>
      </Box>
    </Box>
  ));

  return (
    <>
      <StaticNav />
      <div className="proj-page-cont">
        <div className="proj-page-row">
          <div className="about-wrapper">
            <p className="top-line">Projects</p>
            <h1 className="proj-page-h1">
              Check Out <br></br> My Latest Work
            </h1>
          </div>
        </div>
        <hr className="line-break" />
        <div className="all-proj-divs">{projDivs}</div>
      </div>
    </>
  );
};

export default Work;
