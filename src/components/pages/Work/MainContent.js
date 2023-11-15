import React from 'react';
import AppTypeDetail from './micro-components/AppTypeDetail';
import IconGroup from './micro-components/IconGroup';
import ProjectsList from './ProjectsList';

export default function MainContent() {
  return (
    <div className="w-full xs:w-[90%] h-full lg:h-[1120px] flex flex-col lg:flex-row justify-around lg:justify-between text-white md:float-right pt-10 xxs:pt-32 pb-16 lg:py-10 px-4 xxs:px-10 lg:px-0 overflow-y-auto smooth-scroll mx-auto md:mx-0">
      <div className="w-full lg:w-2/5 lg:h-full flex flex-col justify-center">
        <p className="uppercase font-monserrat font-medium tracking-ultra-wide">
          Work
        </p>
        <p className="tracking-wider xs:tracking-ultra-wide lg:max-w-[80%] leading-5 font-thin mt-5 font-gotham-light text-xs">
          Just beginning my web development adventure as the{' '}
          <span className="font-gotham-book text-normal-tan">
            Senior Frontend Developer at Credit Key
          </span>
          , <span className='block xs:inline my-2 xs:my-0'>I am a relentless learner, enthusiastically looking forward to the
          future of web design and devlopment.</span>
        </p>
        <AppTypeDetail />
        <IconGroup />
      </div>
      <div className="overflow-x-hidden flex flex-col items-start text-sm w-full lg:w-3/5">
        <div className="font-dream-ave text-mobile-fluid md:text-mid-fluid lg:text-fluid">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}
