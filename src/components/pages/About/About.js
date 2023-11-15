import React from 'react';

import Content from './Content';
import Images from './Images';
import PageWrapper from '../../Layout/PageWrapper';

export default function About() {
  const settings = {
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
    showTags: true,
    tagsColor: 'text-sage',
    textColor: 'text-deep-gray',
    hoverTextColor: 'hover:black',
  };

  return (
    <PageWrapper settings={settings}>
      <div className="w-full md:w-[90%] mxl:w-4/5 xs:h-screen flex flex-col-reverse mxl:flex-row mxl:justify-between md:float-right overflow-y-auto">
        <Content />
        <div className="mxl:w-1/2 relative">
          <Images />
        </div>
      </div>
    </PageWrapper>
  );
}
