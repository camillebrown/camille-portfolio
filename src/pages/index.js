import React from 'react';

import useScrollToTop from '../hooks/useScrollToTop';
import { Header, Skills, WorkWithMe, Projects, ScrollUp } from '../components';

const Home = () => {
  const { showButton } = useScrollToTop();

  return (
    <div className="body">
      <Header />
      <Skills />
      <WorkWithMe />
      <Projects />

      {showButton && <ScrollUp />}
    </div>
  );
};

export default Home;
