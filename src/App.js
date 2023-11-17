import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Container from './components/Layout/Container';
import Home from './components/pages/Home/Intro';
import ProjectDetail from './components/pages/ProjectDetail/ProjectDetail';
import Work from './components/pages/Work/Work';
import UnderConstruction from './components/pages/UnderConstruction';

import {
  faArrowRightLong,
  faBars,
  faCheck,
  faChevronDown,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

// Add icons to FA library for global usage
library.add(faArrowRightLong, faCheck, faBars, faXmark, faChevronDown);

export default function App() {
  const location = useLocation();
  return (
    <Container>
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/work/:id" element={<ProjectDetail />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/inprogress" element={<UnderConstruction />} />
      </Routes>
    </Container>
  );
}
