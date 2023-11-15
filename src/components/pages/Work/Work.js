import React from 'react';
import MainContent from './MainContent';
import PageWrapper from '../../Layout/PageWrapper';

export default function Work() {
  const settings = {
    topNav: {
      linePlacement: 'top-36 peer-hover/primary:top-40',
      navigateTo: '/',
      navTitle: 'Home',
      titlePlacement: 'top-16 left-1',
    },
    bottomNav: {
      linePlacement: 'bottom-44 peer-hover/secondary:bottom-48',
      navigateTo: '/contact',
      navTitle: 'Contact',
      titlePlacement: 'bottom-20 -left-[14.5px]',
    },
    bgColor: 'bg-deep-gray',
    lineColor: 'bg-white',
    showTags: true,
    textColor: 'text-white',
    hoverTextColor: 'hover:text-normal-tan',
  };

  return (
    <PageWrapper settings={settings}>
      <MainContent />
    </PageWrapper>
  );
}
