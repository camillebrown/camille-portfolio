import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getProject } from './projects';
import MainContent from './MainContent';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import PageWrapper from '../../Layout/PageWrapper';
import RevealOnScroll from '../../shared/RevealOnScroll';

export default function ProjectDetail() {
  const location = useLocation();
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(getProject(location.pathname));
  }, [location]);

  const settings = {
    mobileNav: {
      lineColor: ' border-deep-gray',
    },
    topNav: {
      linePlacement: 'top-36 peer-hover/primary:top-40',
      navigateTo: '/work',
      navTitle: 'Work',
      titlePlacement: 'top-16 left-1',
    },
    bottomNav: {
      linePlacement: 'bottom-44 peer-hover/secondary:bottom-48',
      navigateTo: '/contact',
      navTitle: 'Contact',
      titlePlacement: 'bottom-20 -left-[14.5px]',
    },
    bgColor: 'bg-base-tan',
    lineColor: 'bg-deep-gray',
    showTags: false,
    textColor: 'text-deep-gray',
    hoverTextColor: 'hover:text-black',
  };

  return (
    <PageWrapper settings={settings}>
      <PageHeader project={project} />
      <MainContent project={project} />
      <RevealOnScroll
        parentClass={
          project?.figma &&
          'hidden xs:inline-block my-14 h-30-screen xs:h-half-screen xs:w-full'
        }
      >
        {project?.figma && project?.figma}
      </RevealOnScroll>
      <RevealOnScroll parentClass="my-20 4xs:my-4 xxs:my-0">
        <img src={project?.img} alt={project?.alt} className="w-4/5 mx-auto" />
      </RevealOnScroll>
      <PageFooter project={project} />
    </PageWrapper>
  );
}
