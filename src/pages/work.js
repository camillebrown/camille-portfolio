import React from 'react';
import ProjectDivs from '../components/Projects/ProjectDivs';
import StaticNavbar from '../components/layout/StaticNav';
import { PageTitle, PageHeader } from '../components/Projects/ProjectElements';

import {
  WorkPageContainer,
  WorkPageParagraph,
} from './page-css-elements/WorkPageElements';

export default function Work() {
  return (
    <>
      <StaticNavbar />
      <WorkPageContainer className="container">
        <div className="has-text-centered">
          <PageTitle className="is-size-4 is-uppercase has-text-weight-light mt-6 mb-3">
            Projects
          </PageTitle>
          <PageHeader className="is-size-3 has-text-weight-semibold my-3">
            Check Out My Latest Work
          </PageHeader>
          <WorkPageParagraph className="is-size-6 has-text-weight-light">
            I'm always looking for new and creative ways to focus on the success
            of my clients and enhance product development. As a self-starter who
            adapts and works easily between developing and implementing
            strategies, I contribute creative problem-solving skills and
            innovative solutions while blending my approachable, fun spirit to
            every project I take on.
          </WorkPageParagraph>
        </div>
        <div className="columns is-flex is-justify-content-center  mb-6 mx-6 my-3 is-multiline">
          <ProjectDivs />
        </div>
      </WorkPageContainer>
    </>
  );
}
