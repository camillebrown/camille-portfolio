import React from 'react';
import ProjectDivs from '../components/Projects/ProjectDivs';
import StaticNavbar from '../components/layout/StaticNav';
import { PageTitle, PageHeader } from '../components/Projects/ProjectElements';

export default function Work() {
  return (
    <>
      <StaticNavbar />
      <div className="container" style={{ maxWidth: '90%', height: '80vh' }}>
        <div className="has-text-centered">
          <PageTitle className="is-size-4 is-uppercase has-text-weight-light mt-6 mb-3">
            Projects
          </PageTitle>
          <PageHeader className="is-size-3 has-text-weight-semibold my-3">
            Check Out My Latest Work
          </PageHeader>
          <p className="is-size-6 has-text-weight-light px-6 mx-6 my-5">
            Amet non reprehenderit ut fugiat exercitation anim. Enim mollit do
            elit enim tempor sunt excepteur minim qui laboris elit cillum
            excepteur. Non aliqua amet id nostrud laboris esse aliqua ad cillum
            laborum. Esse reprehenderit aliqua mollit non sit. Lorem duis mollit
            nisi eu laborum est irure adipisicing voluptate do sunt elit ipsum
            ad. Aliquip voluptate mollit velit sit officia Lorem mollit ad
            laboris.
          </p>
        </div>
        <div class="columns mb-6">
          <ProjectDivs />
        </div>
      </div>
    </>
  );
}
