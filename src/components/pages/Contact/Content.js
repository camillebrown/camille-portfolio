import React from 'react';

export default function Content() {
  return (
    <div className='h-full w-4/5 mxl:w-full mx-auto mxl:mx-0 flex flex-col mxl:justify-center'>
      <div className="relative mxl:h-1/2 overflow-hidden py-10 xs:py-16 md:py-24 mxl:my-0">
        <p className="absolute bottom-0 w-full font-dream-ave uppercase whitespace-nowrap transition-transform duration-3000 delay-1000 slide-in-bottom text-heading-fluid leading-12 sm:leading-13 md:text-9xl md:leading-13 drop-shadow-lg">
          Hello.
        </p>
      </div>
      <div className="z-20 text-xs sm:text-sm mt-4 sm:mt-10 h-1/2">
        <p className="uppercase font-monserrat font-medium text-sm sm:text-base sm:text-lg tracking-ultra-wide animate__animated animate__fadeInDown">
          Camille Brown
        </p>
        <div className="font-gotham-light tracking-wider leading-5 my-5">
          <p className="fade-in duration-2500">
            Fullstack Web Developer | Web Designer | Collaborator
          </p>
          <p className="my-3 fade-in duration-3000">
            Need an eye-catching site that draws in your end users? Don't
            hesitate to reach out!
          </p>
        </div>
        <p className="uppercase font-monserrat font-medium text-sm sm:text-base sm:text-lg tracking-ultra-wide animate__animated animate__fadeInUp">
          Let's Work Together.
        </p>
      </div>
    </div>
  );
}
