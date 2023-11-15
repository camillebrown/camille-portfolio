import React from 'react';

import Drawing from './Drawing';
import ParticlesBG from '../../Layout/ParticlesBG';
import 'animate.css';

export default function Intro() {
  return (
    <div className="h-screen-3rem flex flex-col items-center justify-center">
      <ParticlesBG className="-z-1" />
      <div className="z-10 flex flex-col items-center justify-center">
        <Drawing />
        <p className="font-dream-ave text-2xl xxs:text-6xl xs:text-8.5xl leading-7 xxs:leading-13 animate__animated animate__fadeInDown">
          camilleb.
        </p>
        <div className="uppercase text-xxs xxs:text-sm xs:text-base tracking-widest font-gotham-book flex flex-col xs:flex-row items-center xs:divide-x animate__animated my-3 animate__fadeInUp text-center">
          <p className="px-2">Web Development</p>
          <p className="px-2">Web Designer</p>
        </div>
      </div>
      <span className="font-la-belle hidden md:inline-block left-24 top-12 text-xl lg:left-40 lg:top-28 absolute text-sage lg:text-3xl animate__animated animate__fadeIn">
        &lt;body&gt;
      </span>
      <span className="font-la-belle hidden md:inline-block left-44 top-40 text-xl lg:left-64 lg:top-56 absolute text-sage lg:text-3xl animate__animated animate__fadeIn">
        &lt;div&gt;
      </span>
      <span className="font-la-belle hidden md:inline-block left-56 bottom-56 text-xl lg:left-72 lg:bottom-72 absolute text-sage lg:text-2xl animate__animated animate__fadeIn">
        &lt;div&gt;
      </span>
      <span className="font-la-belle hidden md:inline-block left-24 bottom-40 text-xl lg:left-40 lg:bottom-56 absolute text-sage lg:text-2xl animate__animated animate__fadeIn">
        &lt;body&gt;
      </span>
    </div>
  );
}
