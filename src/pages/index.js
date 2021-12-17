import React from 'react';

import { Header, Skills, WorkWithMe, Projects } from '../components';

const Home = () => {
  return (
    <div className="body">
      <Header />
      <Skills />
      <WorkWithMe />
      <Projects />
    </div>
  );
};

export default Home;
