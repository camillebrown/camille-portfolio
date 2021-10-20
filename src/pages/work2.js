import React from 'react';
import ProjectDivs from '../components/Projects/ProjectDivs';
import { PageTitle, PageHeader } from '../components/Projects/ProjectElements2';

export default function Work2() {
  return (
    <div className="container" style={{ maxWidth: '90%' }}>
      <div className="has-text-centered my-5">
        <PageTitle className="is-size-4 is-uppercase has-text-weight-light mb-1">
          Projects
        </PageTitle>
        <PageHeader className="proj-page-h1 is-size-3 has-text-weight-semibold mb-5">
          Check Out My Latest Work
        </PageHeader>
        <div className="divider" style={{ width: '70%', margin: '0 auto' }} />
      </div>
      <div class="columns my-6">
        <ProjectDivs />
      </div>
    </div>
  );
}
