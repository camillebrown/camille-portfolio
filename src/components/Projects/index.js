import React, { useState } from 'react';
import {
  MainContainer,
  ProjectBg1,
  ProjectBg2,
  MainImg,
  IndexProjectContainer,
  IndexProjectSubtitle,
  ProjectCard,
  PageTitle,
  ProjectTitle,
  ProjectSubtitle,
  ProjectIcon1,
  ProjectIcon2,
  ProjectIcon3
} from './ProjectElements2';
import { Button2 } from '../ButtonElement';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { MainBackground, ProjectDesc } from '../Main/MainElements';

const Projects = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MainContainer
      className="is-flex is-justify-content-center is-align-items-center"
      id="work"
    >
      <MainBackground className="columns is-relative">
        <ProjectBg2 className="column" />
        <ProjectBg1 className="column">
          <MainImg
            src="https://i.ibb.co/CVBFVBw/half-stripes.png"
            alt="Half Stripes"
          />
        </ProjectBg1>
      </MainBackground>
      <IndexProjectContainer className="is-flex is-flex-direction-column has-text-centered is-align-items-center">
        <div className="is-flex is-flex-direction-column is-align-items-center">
          <PageTitle className="is-size-5-desktop is-size-7-touch has-text-centered is-uppercase mt-3">
            Check Out My Work
          </PageTitle>
          <IndexProjectSubtitle className="mb-3 mt-2 is-size-3-desktop is-size-6-touch has-text-centered has-text-weight-bold">
            A Few Featured Projects
          </IndexProjectSubtitle>
          <ProjectDesc className="is-size-6 has-text-weight-light">
            Need someone focused on attention to detail and design accuracy?{' '}
            <br></br> I look forward to helping you in all of the stages of your
            digital project: strategy, design, and web development.
          </ProjectDesc>
        </div>
        <div className="columns is-flex is-justify-content-center m-6">
          <ProjectCard
            to="/work"
            className="column is-flex is-flex-direction-column is-align-items-center p-6"
          >
            <ProjectIcon1
              src="https://i.ibb.co/XFCdsq7/undraw-fitness-tracker-3033.png"
              alt="Fitness Tracker Icon"
            />
            <ProjectTitle className="is-size-4-desktop is-size-6-touch has-text-centered is-uppercase has-text-weight-bold mb-2">
              Better.
            </ProjectTitle>
            <ProjectSubtitle className="is-size-6-desktop is-size-7-touch">
              The Better.™ App allows users to track their daily fitness
              activity, moods, sleep patterns, and meals over time.
            </ProjectSubtitle>
          </ProjectCard>
          <ProjectCard
            to="/work"
            className="column is-flex is-flex-direction-column is-align-items-center p-6"
          >
            <ProjectIcon2
              style={{ width: '35%', height: 'auto' }}
              src="https://i.ibb.co/1LLmbXV/cooking.png"
              alt="Cooking Icon"
            />
            <ProjectTitle className="is-size-4 has-text-centered is-uppercase has-text-weight-bold mb-2">
              Cookbook Curator
            </ProjectTitle>
            <ProjectSubtitle className="is-size-6">
              Find thousands of recipes and add them to your own personalized
              cookbook or create and save your own recipes!
            </ProjectSubtitle>
          </ProjectCard>
          <ProjectCard
            to="/work"
            className="column is-flex is-flex-direction-column is-align-items-center p-6"
          >
            <ProjectIcon3
              src="https://i.ibb.co/xDF52cw/game.png"
              alt="Trivia Game Icon"
            />
            <ProjectTitle className="is-size-4 has-text-centered is-uppercase has-text-weight-bold mb-2">
              Got the Beat!
            </ProjectTitle>
            <ProjectSubtitle className="is-size-6 gtb">
              This music trivia game tests users' music industry knowledge. Can
              you get the high score?
            </ProjectSubtitle>
          </ProjectCard>
        </div>
        <Button2
          to="/work"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          style={{ width: '20%', margin: '0 auto' }}
          className="mt-3"
        >
          {' '}
          See More!{' '}
          {hover ? (
            <MdArrowForward className="arrow-forward" />
          ) : (
            <MdKeyboardArrowRight className="arrow-right" />
          )}
        </Button2>
      </IndexProjectContainer>
    </MainContainer>
  );
};

export default Projects;
