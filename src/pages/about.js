import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { IoCloudDownloadOutline } from 'react-icons/io5';

import {
  MainRow,
  MainWrapper,
  MainBlock1,
  MainBlock2,
  MainBackground,
  Column1,
  Column2,
  ProjectDesc,
} from '../components/Main/MainElements';
import { Skills } from '../components/Skills';
import StaticNavbar from '../components/layout/StaticNav';
import { Buttons, AboutBtnLink, MainContainer } from '../components/page-css-elements/AboutPageElements';
import { PageTitle, PageHeader } from '../components/Projects/ProjectElements';

export default function About() {
  return (
    <>
      <StaticNavbar />
      <MainContainer className="is-flex is-justify-content-center is-align-items-center">
        <MainBackground className="columns is-relative">
          <MainBlock1 className="column is-half" />
          <MainBlock2 className="column" />
        </MainBackground>
        <MainWrapper className="is-flex is-justify-content-center">
          <MainRow>
            <Column1>
              <PageTitle className="is-size-6 is-uppercase has-text-weight-light-desktop my-3">
                Hello!
              </PageTitle>
              <PageHeader className="is-size-4-desktop is-size-6-touch has-text-weight-semibold my-3">
                I'm Camille Brown.
              </PageHeader>
              <ProjectDesc className="is-size-6 my-5 has-text-weight-light">
                When I'm not working at the Frontend Developer at{' '}
                <a className="ck" href="https://www.creditkey.com/">
                  Credit Key
                </a>
                , as a California native, I love the outdoors, sunny days on the
                beach and all things music. Don't hesitate to reach out! I look
                forward to working with you.
              </ProjectDesc>
              <Buttons className="my-4 is-flex columns is-multiline">
                <AboutBtnLink
                  className="column is-flex is-flex-direction-row is-justify-content-center is-align-items-center has-text-centered is-size-6 mb-2 mr-3 py-2 px-4"
                  to="//www.drive.google.com/file/d/1vbl_OcsZT4XjZu0KZk9IEOuulllBHP-z/view?usp=sharing"
                >
                  <p>my resume</p>
                  <IoCloudDownloadOutline className="ml-2" />
                </AboutBtnLink>
                <AboutBtnLink
                  className="column is-flex is-flex-direction-row is-justify-content-center is-align-items-center has-text-centered is-size-6 mb-2 mr-3 py-2 px-4"
                  to="//www.drive.google.com/file/d/1vbl_OcsZT4XjZu0KZk9IEOuulllBHP-z/view?usp=sharing"
                >
                  <p>contact me</p>
                  <HiOutlineMail className="ml-2" />
                </AboutBtnLink>
              </Buttons>
              {Skills()}
            </Column1>
            <Column2 className="column is-flex is-justify-content-center">
              <img
                src="https://i.ibb.co/X7RLLPy/compgirl.jpg"
                alt="About Me"
                className="profile-pic2"
              />
            </Column2>
          </MainRow>
        </MainWrapper>
      </MainContainer>
    </>
  );
}
