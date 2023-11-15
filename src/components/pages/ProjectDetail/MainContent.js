import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../shared/RevealOnScroll';

export default function MainContent({ project }) {
  return (
    <div className="min-h-max h-screen xxs:h-90-screen lg:h-screen-3rem w-full xs:w-3/4 mx-auto flex flex-col items-center text-deep-gray font-montserrat px-1 xxs:px-5 xs:px-0">
      <RevealOnScroll
        parentClass="w-full text-fluid xxs:text-xl xs:text-2xl md:text-3xl lg:text-5xl tracking-ultra-wide text-center xxs:h-1/3 xxs:h-2/5 md:h-1/2 my-10 xxs:my-0"
        childClass="flex items-center justify-center"
      >
        <p>{project?.description}</p>
      </RevealOnScroll>
      <div className="h-auto w-full">
        <RevealOnScroll parentClass="mb-3 lg:mb-10 sm:h-1/4">
          <div className="flex items-center justify-center">
            <span className="w-72 p-[0.03rem] bg-deep-gray" />
            <p className="font-dream-ave text-mobile-fluid xs:text-5xl mx-6">
              Overview
            </p>
            <span className="w-72 p-[0.03rem] bg-deep-gray" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="mx-auto flex flex-col lg:flex-row justify-between items-start h-3/4">
            <div className="w-full lg:w-3/5 flex flex-col lg:flex-row justify-between items-start gap-3 lg:gap-0">
              <div className="flex flex-col items-center xxs:items-start text-center xxs:text-left xxs:mx-2 xs:mx-6 w-full lg:w-3/5">
                <p className="max-w-min border-b border-deep-gray uppercase tracking-ultra-wide">
                  goal
                </p>
                <p className="leading-5 mt-3 font-gotham-book text-xs xxs:text-sm xs:pr-2">
                  {project?.longDescription}
                </p>
              </div>
              <div className="flex flex-col items-center xxs:items-start text-center xxs:text-left xxs:mx-2 xs:mx-6 w-full lg:w-2/5">
                <p className="max-w-min border-b border-deep-gray uppercase tracking-ultra-wide">
                  skills
                </p>
                <p className="leading-5 mt-3 font-gotham-book text-xs xxs:text-sm xs:pr-2">
                  {project?.tags.join(', ')}
                </p>
              </div>
            </div>
            <div className="flex flex-col xs:flex-row justify-between lg:justify-around w-full lg:w-2/5 gap-3 lg:gap-0 my-3 lg:my-0 mx-0 xxs:mx-2 xs:mx-6 lg:mx-0">
              <div className="flex flex-col items-center xxs:items-start w-full xxs:w-1/2 lg:w-auto">
                <p className="max-w-min border-b border-deep-gray uppercase tracking-ultra-wide">
                  Languages
                </p>
                <div className="flex flex-wrap gap-3 lg:gap-0 mt-3">
                  {project?.langs ? (
                    project?.langs.map((l, idx) => (
                      <l.icon
                        key={idx}
                        className="lg:w-1/2 text-xl lg:text-2xl my-1 lg:my-3"
                      />
                    ))
                  ) : (
                    <div className="flex items-center">
                      <img
                        src={project?.squarespace}
                        alt="squarespace"
                        className="w-4 mx-1"
                      />
                      <p className="leading-5 font-gotham-book text-sm">
                        Made with Squarespace
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center xxs:items-start w-full xxs:w-1/2 lg:w-auto">
                <p className="max-w-min border-b border-deep-gray uppercase tracking-ultra-wide">
                  Links
                </p>
                <div className="leading-5 mt-3 font-gotham-medium text-sm xs:pr-2 flex flex-col sm:flex-row lg:flex-col items-center xxs:items-start gap-2">
                  <Link
                    to={project?.git}
                    className="block pb lg:border-b-2 lg:border-transparent transition-colors duration-500 ease-in-out hover:border-sage max-w-min hover:text-sage text-center 4xs:text-left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Link>
                  <Link
                    to={project?.url}
                    className="block capitalize pb lg:border-b-2 lg:border-transparent hover:border-sage hover:text-sage text-center 4xs:text-left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project?.type}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
